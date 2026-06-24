import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/header.js",
            name: "KSTableFoot",
            formats: ["umd"],
            fileName: () => `${templateVersion}/KSTableFoot.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};