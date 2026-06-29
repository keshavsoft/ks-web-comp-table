import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/header.js",
            name: "KSComponents",
            formats: ["umd"],
            fileName: () => `${templateVersion}/KSComponents.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};