import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inDefaultRow
}) => {
    const closestTr =
        currentInput.closest("fieldset");

    const origAmount = currentInput.value;
    const qty = closestTr.querySelector('[name="Qty"]').value

    closestTr.querySelector('[name="OrigRate"]').value = (origAmount / qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${origAmount}`
    });
};

export default rateInclusiveFunc;