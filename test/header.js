import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "header";

const load = async () => {
    const v = getLatestVersion();

    return import(`../bin/${v}/commands/${commandToSend}.js`);
};

const startFunc = async () => {
    const { default: run } = await load();

    const folderName = process.argv[2];

    const showLog = process.argv[3] === "true";

    run({
        folderName,
        showLog
    });
};

startFunc().then();