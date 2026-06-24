import path from "path";

export const locateDestination = ({ inResolvedFolderName }) => {
    return path.join(process.cwd(), inResolvedFolderName);
};