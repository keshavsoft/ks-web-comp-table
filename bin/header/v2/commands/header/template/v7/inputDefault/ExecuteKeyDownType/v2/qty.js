import showCalcMessage from "./showCalcMessage.js";

const qtyFunc = ({ currentInput, inClosestControl }) => {
    const closestTr = inClosestControl;

    const qty = Number(currentInput.value);

    const rateInclusiveValue = Number(
        closestTr.querySelector('input[name="RateInc"]').value
    );

    const Amount = rateInclusiveValue * qty;
    // debugger
    closestTr.querySelector('input[name="Amount"]').value = Amount.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${Amount}`
    });
};

export default qtyFunc;