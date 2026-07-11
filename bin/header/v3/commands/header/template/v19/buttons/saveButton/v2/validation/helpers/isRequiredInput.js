import getClosestCustomElement from "./getClosestCustomElement.js";

const isRequiredInput = (input) => {
    const customElement = getClosestCustomElement(input);
    if (!customElement) return false;

    const isNotEmptyAttr = customElement.getAttribute("isnotempty");
    return isNotEmptyAttr && isNotEmptyAttr !== "undefined" && isNotEmptyAttr !== "false";
};

export default isRequiredInput;
