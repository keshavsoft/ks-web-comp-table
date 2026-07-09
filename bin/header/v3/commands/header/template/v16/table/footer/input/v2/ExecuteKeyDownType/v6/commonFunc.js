import showCalcMessage from "./showCalcMessage.js";

/**
 * Dynamically evaluates a mathematical formula using the provided row values.
 * 
 * @param {Object} params
 * @param {string} params.formula - JavaScript-compatible formula string (e.g. "qty * rate")
 * @param {Object} params.values - Key-value map of input names to numbers
 * @returns {number} The calculated value
 */
const evaluateFormula = ({ formula, values }) => {
    const fn = new Function(
        ...Object.keys(values),
        `return ${formula};`
    );

    return fn(...Object.values(values));
};

/**
 * Walks up the DOM tree from an element to find the closest custom component parent.
 * 
 * @param {HTMLElement} element - Starting DOM element
 * @returns {HTMLElement|null} Custom component element or null
 */
const getClosestCustomElement = (element) => {
    let current = element.parentElement;
    while (current) {
        if (current.tagName && current.tagName.includes("-")) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
};

/**
 * Extracts and maps all input values from the target table row.
 * 
 * @param {HTMLTableRowElement} rowElement - Target table row
 * @returns {Object} Key-value pairs of input names and values
 */
const getRowInputValues = (rowElement) => {
    const allInputs = rowElement.querySelectorAll("input");
    return Object.fromEntries(
        [...allInputs].map(input => [input.name, Number(input.value) || 0])
    );
};

/**
 * Updates the value of the target input in the table row.
 * 
 * @param {HTMLTableRowElement} rowElement - Target table row
 * @param {string} controlName - Name of the target input element
 * @param {number} value - Calculated number to show
 * @returns {boolean} Whether the update succeeded
 */
const updateTargetControl = (rowElement, controlName, value) => {
    const targetControl = rowElement.querySelector(`input[name="${controlName}"]`);
    if (!targetControl) return false;

    targetControl.value = value.toFixed(2);
    return true;
};

/**
 * Orchestrates the formula calculation and updates the target cell in the footer row.
 */
const startFunc = ({ currentInput, inClosestControl }) => {
    const closestTr = inClosestControl;

    // 1. Get properties from the custom element wrapper
    const customElement = getClosestCustomElement(currentInput);
    if (!customElement) return;

    const formula = customElement.getAttribute("evalformula");
    const evalToControl = customElement.getAttribute("evalToControl");

    // 2. Read values from inputs inside the row
    const values = getRowInputValues(closestTr);

    // 3. Calculate formula
    const calculatedValue = evaluateFormula({ formula, values });

    // 4. Update the target element
    const isUpdated = updateTargetControl(closestTr, evalToControl, calculatedValue);
    if (!isUpdated) return;

    // 5. Display calculation feedback message
    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${calculatedValue}`
    });
};

export default startFunc;