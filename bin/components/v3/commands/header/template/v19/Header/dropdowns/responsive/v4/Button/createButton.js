export const createButton = (element, defaults) => {
    const button = document.createElement("button");
    button.type = "button";
    const customClass = element.getAttribute("ks-class") || "";
    const defaultClass = defaults?.classes?.buttonClass || "";
    button.className = `${customClass} ${defaultClass}`.trim();
    return button;
};
