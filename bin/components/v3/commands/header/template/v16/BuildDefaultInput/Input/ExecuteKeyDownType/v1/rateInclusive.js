import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inDefaultRow
}) => {
    const closestTr =
        currentInput.closest("fieldset");

    const rate = currentInput.value;
    const qty = closestTr.querySelector('[name="Qty"]').value

    closestTr.querySelector('[name="Amount"]').value = (rate * qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `rate change : ${rate}`
    });
};

export default rateInclusiveFunc;