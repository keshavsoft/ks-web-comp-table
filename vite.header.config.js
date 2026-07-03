import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Get the latest header version from bin/header (e.g., v3)
const headerPath = path.resolve(__dirname, "bin/header");
if (!fs.existsSync(headerPath)) {
    throw new Error("No bin/header directory found");
}

const headerVersions = fs.readdirSync(headerPath)
    .filter(n => /^v\d+$/.test(n))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

if (headerVersions.length === 0) {
    throw new Error("No header version directories found in bin/header");
}
const latestHeaderVersion = headerVersions.at(-1);

// 2. Get the latest template version from bin/header/[latestHeader]/commands/header/template (e.g., v10)
const templatePath = path.resolve(headerPath, latestHeaderVersion, "commands/header/template");
if (!fs.existsSync(templatePath)) {
    throw new Error(`No template directory found at ${templatePath}`);
}

const templateVersions = fs.readdirSync(templatePath)
    .filter(n => /^v\d+$/.test(n))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

if (templateVersions.length === 0) {
    throw new Error(`No template version directories found in ${templatePath}`);
}
const latestTemplateVersion = templateVersions.at(-1);

// 3. Combined version: e.g. v3.10
const combinedVersion = `${latestHeaderVersion}.${latestTemplateVersion.slice(1)}`;

// 4. Update src/version.js for compatibility
const versionFilePath = path.resolve(__dirname, "src/version.js");
const expectedVersionContent = `// src/version.js
export const templateVersion = "${combinedVersion}";
`;
if (!fs.existsSync(versionFilePath) || fs.readFileSync(versionFilePath, "utf8") !== expectedVersionContent) {
    fs.writeFileSync(versionFilePath, expectedVersionContent, "utf8");
}

// 5. Update src/header.js for compatibility & entry
const headerFilePath = path.resolve(__dirname, "src/header.js");
const expectedHeaderContent = `// src/header.js
import initVerticalComp from "../bin/header/${latestHeaderVersion}/commands/header/template/${latestTemplateVersion}/index.js";

(async () => {
    window.KSTableFootVersion = "${combinedVersion}";

    window.KSTableFoot = initVerticalComp;
})();
`;
if (!fs.existsSync(headerFilePath) || fs.readFileSync(headerFilePath, "utf8") !== expectedHeaderContent) {
    fs.writeFileSync(headerFilePath, expectedHeaderContent, "utf8");
}

// 6. Check if output already exists in dist/
const outputFilePath = path.resolve(__dirname, "dist", combinedVersion, "KSComponents.js");

if (fs.existsSync(outputFilePath)) {
    console.log("\x1b[33m%s\x1b[0m", `[ALERT] Latest version ${combinedVersion} already present in dist. Skipping build.`);
} else {
    const config = {
        configFile: false,
        publicDir: false,
        build: {
            lib: {
                entry: headerFilePath,
                name: "KSComponents",
                formats: ["umd"],
                fileName: () => `${combinedVersion}/KSComponents.js`
            },
            outDir: "dist",
            emptyOutDir: false
        }
    };

    console.log(`Building latest version: ${combinedVersion}`);
    await build(config);
}

// Exit to avoid Vite CLI running again with default fallback behavior
process.exit(0);

export default {};