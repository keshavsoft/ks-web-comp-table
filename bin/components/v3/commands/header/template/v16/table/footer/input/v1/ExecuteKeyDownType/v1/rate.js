import showCalcMessage from "./showCalcMessage.js";

const rateFunc = ({
    currentInput, inDefaultRow, inClosestControl
}) => {
    const closestTr = inClosestControl;

    const rate = currentInput.value;

    const rateInclusiveValue = rate * (1 + (inDefaultRow.TaxPer / 100));

    closestTr.querySelector('[name="RateInc"]').value = rateInclusiveValue.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `rateInc change : ${rateInclusiveValue}`
    });
};

export default rateFunc;