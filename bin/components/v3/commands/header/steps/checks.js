import fs from "fs";
import path from "path";

const validate = ({ toPath, inFolderName, inShowLog }) => {
    const fullPath = path.join(toPath, inFolderName);

    if (!fs.existsSync(fullPath)) {
        return false;
    }

    const files = fs.readdirSync(fullPath);

    if (files.length > 0) {
        console.log("Folder should be empty");
        return true;
    };

    return false;
};

export default validate;