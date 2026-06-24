import icons from "./icons.js";

export const createIcon = ({
    inSvgName, inSvgDivClass = "size-6 flex items-center justify-center"
}) => {
    if (inSvgName in icons) {
        const icon = document
            .createRange()
            .createContextualFragment(icons[inSvgName])
            .firstElementChild;

        const div = document.createElement("div");

        // div.className = "size-6 flex items-center justify-center";
        div.className = inSvgDivClass;
        // console.log("inSvgName----- : ", inSvgName, inSvgDivClass);

        div.appendChild(icon);

        return div;
    };

    return document
        .createRange()
        .createContextualFragment(icons.search)
        .firstElementChild;
};