export const createSpan = (element, spanClass) => {
    const text = element.getAttribute("ks-textToShow") || "";
    const className = element.getAttribute("ks-className") || "";
    const span = document.createElement("span");
    span.textContent = text;
    span.className = className || spanClass || "";
    return span;
};
