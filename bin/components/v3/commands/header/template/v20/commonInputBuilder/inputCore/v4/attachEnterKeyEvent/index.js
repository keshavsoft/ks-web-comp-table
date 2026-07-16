import findContainer from "./findContainer.js";
import getNextFocusableElement from "./getNextFocusableElement.js";
import focusAndSelectElement from "./focusAndSelectElement.js";

const startFunc = (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    const currentInput = event.currentTarget;
    const container = findContainer(currentInput);

    if (!container) return;

    const nextElement = getNextFocusableElement({
        currentInput,
        container
    });

    focusAndSelectElement(nextElement);
};

export default startFunc;
