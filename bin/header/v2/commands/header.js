import { locateSource } from "./header/steps/locateSource.js";
import { locateDestination } from "./header/steps/locateDestination.js";

import { createProject } from "./header/steps/createProject.js";
import { announce } from "./header/steps/announce.js";

import resolveFolderName from "./header/steps/resolveFolderName.js";
import checks from "./header/steps/checks.js";

export default ({
    folderName = "",
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = false
}) => {
    if (showLog) {
        console.log(`Resolving folder name..., folderName : ${folderName}`);
    };

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (showLog) {
        console.log(`\n[1] Running checks..., resolvedFolderName : ${resolvedFolderName}`);
    };

    const fromChecks = checks({
        inFolderName: resolvedFolderName,
        toPath,
        inShowLog: showLog
    });

    if (fromChecks) return false;

    if (showLog) {
        console.log("Locating source...");
    }

    const source = locateSource({
        showLog
    });

    if (showLog) {
        console.log("Locating destination...");
    }

    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        showLog
    });

    if (showLog) {
        console.log("Creating project...");
    }

    createProject({
        source,
        destination,
        showLog
    });

    if (inAnnounce) {

        if (showLog) {
            console.log("Announcing...");
        }

        announce({
            inResolvedFolderName: resolvedFolderName,
            showLog
        });
    }
};