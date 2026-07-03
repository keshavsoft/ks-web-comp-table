import showCalcMessage from "./showCalcMessage.js";

const rate = ({
    currentInput
}) => {
    // console.log("currentInput : ", currentInput);

    const closestTr =
        currentInput.closest("tr");

    const qty = Number(
        closestTr.querySelector('[name="Qty"]').value
    );

    const rate = Number(
        closestTr.querySelector('[name="Rate"]').value
    );

    const Amount = rate * qty;

    closestTr.querySelector('[name="Amount"]').value = Amount;

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${Amount}`
    });
};

export default rate;