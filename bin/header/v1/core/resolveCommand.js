import fs from "fs";

const files = fs.readdirSync(new URL("../commands/", import.meta.url));

const entries = await Promise.all(
    files.filter(f => f.endsWith(".js"))
        .map(async f => [f.replace(".js", ""), (await import(`../commands/${f}`)).default])
);

const map = Object.fromEntries(entries);

const resolveCommand = (cmd) => {
    return map[cmd] || null;
};

export default resolveCommand;