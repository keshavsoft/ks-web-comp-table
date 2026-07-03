import showCalcMessage from "./showCalcMessage.js";

const amountFunc = ({
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

    const rateIncValue =
        qty ? amount / qty : 0;

    const rateIncControl = closestTr.querySelector('[name="RateInc"]');

    rateIncControl.value = rateIncValue;

    // Create a synthetic Enter key event
    const enterEvent = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        bubbles: true,
        cancelable: true
    });

    // Programmatically fire it on the second input
    rateIncControl.dispatchEvent(enterEvent);

    showCalcMessage({
        input: currentInput,
        message: `RateInc change : ${rateIncValue}`
    });
};

export default amountFunc;