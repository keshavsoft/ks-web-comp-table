import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getLatestVersionInDir = (dirPath) => {
    const versions = fs.readdirSync(dirPath)
        .filter(n => /^v\d+$/.test(n))
        .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
    return versions.at(-1);
};

const headerVersionsPath = path.resolve(__dirname, "../../bin/header");
const vHeader = getLatestVersionInDir(headerVersionsPath);

const templatesPath = path.resolve(__dirname, `../../bin/header/${vHeader}/commands/header/template`);
const vTemplate = getLatestVersionInDir(templatesPath);

const targetModulePath = path.resolve(
    __dirname,
    `../../bin/header/${vHeader}/commands/header/template/${vTemplate}/inputCore/getInputOptions.js`
);

// Use a file URL for dynamic import compatibility across operating systems
const fileUrl = new URL(`file://${targetModulePath.replace(/\\/g, "/")}`);
const { defaultOptions } = await import(fileUrl.href);

console.log("defaultOptions : ", defaultOptions);


// export { defaultOptions };
