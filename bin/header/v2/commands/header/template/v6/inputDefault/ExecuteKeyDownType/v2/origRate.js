import showCalcMessage from "./showCalcMessage.js";

const rateInclusiveFunc = ({
    currentInput, inClosestControl
}) => {
    const closestTr = inClosestControl;

    const origRateValue = currentInput.value;
    const qty = closestTr.querySelector('input[name="Qty"]').value

    closestTr.querySelector('input[name="OrigAmount"]').value = (origRateValue * qty).toFixed(2);
    // console.log("aaaaaaaaaaa");

    showCalcMessage({
        input: currentInput,
        message: `rate change : ${origRateValue}`
    });
};

export default rateInclusiveFunc;