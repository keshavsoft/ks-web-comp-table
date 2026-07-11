const findContainer = (element) => {
    return element.closest("form") ||
           element.closest("fieldset") ||
           element.closest("tr") ||
           element.closest("body");
};

const getFocusableElements = (container) => {
    const selector = "input, button";
    const allElements = [...container.querySelectorAll(selector)];
    return allElements.filter(el => el.tabIndex !== -1 && !el.disabled);
};

const getNextFocusableElement = (currentInput, container) => {
    const focusableElements = getFocusableElements(container);
    const currentIndex = focusableElements.indexOf(currentInput);
    
    if (currentIndex === -1 || currentIndex === focusableElements.length - 1) {
        return null;
    }
    return focusableElements[currentIndex + 1];
};

const focusAndSelectElement = (element) => {
    if (!element) return;
    
    element.focus();
    if (typeof element.select === "function") {
        element.select();
    }
};

const handleEnterKey = (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    const currentInput = event.currentTarget;
    const container = findContainer(currentInput);

    if (!container) return;

    const nextElement = getNextFocusableElement(currentInput, container);
    focusAndSelectElement(nextElement);
};

const startFunc = (input) => {
    input.addEventListener("keydown", handleEnterKey);
};

export default startFunc;