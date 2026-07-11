import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inClosestControl
}) => {
    const closestTr = inClosestControl;

    const rate = currentInput.value;
    const qtyControl = closestTr.querySelector('input[name="Qty"]');
    const qty = qtyControl.value;
    // debugger
    closestTr.querySelector('input[name="Amount"]').value = (rate * qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `rate change : ${rate}`
    });
};

export default rateInclusiveFunc;