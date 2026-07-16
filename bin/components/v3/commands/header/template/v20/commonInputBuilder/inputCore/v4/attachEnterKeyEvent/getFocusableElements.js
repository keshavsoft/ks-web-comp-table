const focusableSelector = "input, button";

const isAllowedInTabOrder = (element) => {
    return element.tabIndex !== -1;
};

const isEnabled = (element) => {
    return !element.disabled;
};

const isVisible = (element) => {
    return element.offsetParent !== null;
};

const canReceiveFocus = (element) => {
    return isAllowedInTabOrder(element) &&
        isEnabled(element) &&
        isVisible(element);
};

const startFunc = (container) => {
    const possibleElements = [...container.querySelectorAll(focusableSelector)];

    return possibleElements.filter(canReceiveFocus);
};

export default startFunc;
