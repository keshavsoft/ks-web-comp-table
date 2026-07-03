import showCalcMessage from "./showCalcMessage.js";

const amountFunc = ({
    currentInput
}) => {
    const closestTr =
        currentInput.closest("fieldset");

    const amount = currentInput.value;
    const qty = closestTr.querySelector('[name="Qty"]').value

    closestTr.querySelector('[name="RateInc"]').value = (amount / qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `RateInc change : ${amount}`
    });
};

export default amountFunc;