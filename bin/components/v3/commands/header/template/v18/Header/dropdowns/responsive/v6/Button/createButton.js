export const createButton = (element, defaultClass) => {
    const button = document.createElement("button");
    button.type = "button";
    const customClass = element.getAttribute("ks-class") || "";
    button.className = `${customClass} ${defaultClass || ""}`.trim();
    return button;
};
