import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/header.js",
            name: "KSTableComponents",
            formats: ["umd"],
            fileName: () => `${templateVersion}/KSTableComponents.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};