import showCalcMessage from "./showCalcMessage.js";

const Amount = ({
    currentInput
}) => {
    const closestTr =
        currentInput.closest("tr");

    const qty = Number(
        closestTr.querySelector('[name="Qty"]').value
    );

    const amount = Number(
        closestTr.querySelector('[name="Amount"]').value
    );

    const rate =
        qty ? amount / qty : 0;

    closestTr.querySelector('[name="Rate"]').value =
        rate;

    showCalcMessage({
        input: currentInput,
        message: `Rate change : ${rate}`
    });
};

export default Amount;