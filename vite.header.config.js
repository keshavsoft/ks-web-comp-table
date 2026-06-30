import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Get the latest header version from bin/header (e.g., v2)
const headerPath = path.resolve(__dirname, "bin/header");
const headerVersions = fs.readdirSync(headerPath)
    .filter(n => /^v\d+$/.test(n))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

if (headerVersions.length === 0) {
    throw new Error("No header version directories found in bin/header");
}
const latestHeaderVersion = headerVersions.at(-1);

// 2. Get the latest template version from bin/header/[latestHeader]/commands/header/template (e.g., v10)
const templatePath = path.resolve(headerPath, latestHeaderVersion, "commands/header/template");
const templateVersions = fs.readdirSync(templatePath)
    .filter(n => /^v\d+$/.test(n))
    .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

if (templateVersions.length === 0) {
    throw new Error(`No template version directories found in ${templatePath}`);
}
const latestTemplateVersion = templateVersions.at(-1);

// 3. Combined version: e.g. v2.10
const combinedVersion = `${latestHeaderVersion}.${latestTemplateVersion.slice(1)}`;

// 4. Update src/version.js
const versionFilePath = path.resolve(__dirname, "src/version.js");
const expectedVersionContent = `// src/version.js
export const templateVersion = "${combinedVersion}";
`;
if (!fs.existsSync(versionFilePath) || fs.readFileSync(versionFilePath, "utf8") !== expectedVersionContent) {
    fs.writeFileSync(versionFilePath, expectedVersionContent, "utf8");
}

// 5. Update src/header.js
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

export default {
    build: {
        lib: {
            entry: "src/header.js",
            name: "KSComponents",
            formats: ["umd"],
            fileName: () => `${combinedVersion}/KSComponents.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};