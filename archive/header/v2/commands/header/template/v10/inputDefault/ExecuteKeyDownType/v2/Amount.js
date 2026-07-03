import showCalcMessage from "./showCalcMessage.js";

const amountFunc = ({
    currentInput, inClosestControl
}) => {
    const closestTr = inClosestControl;

    const amount = currentInput.value;
    const qty = closestTr.querySelector('input[name="Qty"]').value

    closestTr.querySelector('input[name="RateInc"]').value = (amount / qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `RateInc change : ${amount}`
    });
};

export default amountFunc;