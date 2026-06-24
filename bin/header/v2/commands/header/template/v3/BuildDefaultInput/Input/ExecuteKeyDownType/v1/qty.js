import showCalcMessage from "./showCalcMessage.js";

const qtyFunc = ({
    currentInput
}) => {
    const closestTr =
        currentInput.closest("fieldset");

    const qty = Number(
        closestTr.querySelector('[name="Qty"]').value
    );

    const rateInclusiveValue = Number(
        closestTr.querySelector('[name="RateInc"]').value
    );

    const Amount = rateInclusiveValue * qty;

    closestTr.querySelector('[name="Amount"]').value = Amount.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${Amount}`
    });
};

export default qtyFunc;