import getFocusableElements from "./getFocusableElements.js";

const startFunc = ({ currentInput, container }) => {
    const focusableElements = getFocusableElements(container);
    const currentIndex = focusableElements.indexOf(currentInput);

    if (currentIndex === -1 || currentIndex === focusableElements.length - 1) {
        return null;
    };

    return focusableElements[currentIndex + 1];
};

export default startFunc;
