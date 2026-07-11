import icons from "./icons.js";

export const getIcon = (element) => {
    const svgName = element.getAttribute("ks-svgName") || "";
    const svgDivClass = element.getAttribute("ks-svgDivClass") || "";

    if (svgName in icons) {
        const icon = document
            .createRange()
            .createContextualFragment(icons[svgName])
            .firstElementChild;

        const div = document.createElement("div");
        div.className = svgDivClass;
        div.appendChild(icon);

        return div;
    }

    return document
        .createRange()
        .createContextualFragment(icons.search)
        .firstElementChild;
};
