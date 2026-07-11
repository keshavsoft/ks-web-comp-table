import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import resolveCommand from "./core/resolveCommand.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = async () => {
  const input = parseInput();

  if (input.action === "--help" || input.action === "-h" || input.action === "help") return showUsage(version);

  const command = resolveCommand(input.cmd);

  if (!command) return (console.log(`Unknown command: ${input.cmd}\n`), showUsage(version));

  await command({
    folderName: input.folderName
  });
};

export default run;