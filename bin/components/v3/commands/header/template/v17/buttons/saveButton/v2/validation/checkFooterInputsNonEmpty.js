import isFocusableInput from "./helpers/isFocusableInput.js";
import isRequiredInput from "./helpers/isRequiredInput.js";
import resetCustomValidity from "./helpers/resetCustomValidity.js";
import findFirstEmptyInput from "./helpers/findFirstEmptyInput.js";
import reportInvalidInput from "./helpers/reportInvalidInput.js";

const startFunc = ({ inTableFooter }) => {
    if (!inTableFooter) return true;

    const allInputs = Array.from(inTableFooter.querySelectorAll("input"));
    const focusableInputs = allInputs.filter(isFocusableInput);
    const requiredInputs = focusableInputs.filter(isRequiredInput);

    resetCustomValidity(requiredInputs);

    const emptyInput = findFirstEmptyInput(requiredInputs);
    if (emptyInput) {
        reportInvalidInput(emptyInput);
        return false;
    }

    return true;
};

export default startFunc;
