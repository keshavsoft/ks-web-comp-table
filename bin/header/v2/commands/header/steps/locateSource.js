import path from "path";

import sourceVersion from "./getLatestVersion.js";

import fs from "fs";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const locateSource = () => {
    return path.join(
        __dirname,
        "..",
        "template",
        sourceVersion
    );
};