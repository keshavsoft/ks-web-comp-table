import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inDefaultRow
}) => {
    const closestTr =
        currentInput.closest("tr");

    const rateInclusiveValue = currentInput.value;

    const rate = rateInclusiveValue / (1 + (inDefaultRow.TaxPer / 100));

    closestTr.querySelector('[name="Rate"]').value = rate.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `rate change : ${rate}`
    });
};

export default rateInclusiveFunc;