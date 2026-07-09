import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inClosestControl
}) => {
    const closestTr = inClosestControl;

    const origRateValue = currentInput.value;
    const qty = closestTr.querySelector('[name="Qty"]').value

    closestTr.querySelector('[name="OrigAmount"]').value = (origRateValue * qty).toFixed(2);
    console.log("aaaaaaaaaaa");

    showCalcMessage({
        input: currentInput,
        message: `rate change : ${origRateValue}`
    });
};

export default rateInclusiveFunc;