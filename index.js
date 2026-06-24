import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();
    return (await import(`./bin/${v}/commands/exportCommands/${cmd}.js`)).default;
};

export const express = async (...a) => (await load("express"))(...a);