export default function parseInput() {
    const [cmd, folderName] = process.argv.slice(2);

    return {
        cmd: cmd || null,
        folderName: folderName || null,
        toPath: process.cwd()
    };
};