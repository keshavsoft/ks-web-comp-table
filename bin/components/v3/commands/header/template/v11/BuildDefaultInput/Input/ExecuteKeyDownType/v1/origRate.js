import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inDefaultRow
}) => {
    const closestTr =
        currentInput.closest("fieldset");

    const origRateValue = currentInput.value;
    const qty = closestTr.querySelector('[name="Qty"]').value

    closestTr.querySelector('[name="OrigAmount"]').value = (origRateValue * qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `rate change : ${origRateValue}`
    });
};

export default rateInclusiveFunc;