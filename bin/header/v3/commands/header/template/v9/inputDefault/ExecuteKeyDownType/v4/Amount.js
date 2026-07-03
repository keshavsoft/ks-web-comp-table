import showCalcMessage from "./showCalcMessage.js";

const evaluateFormula = ({ formula, values }) => {
    const fn = new Function(
        ...Object.keys(values),
        `return ${formula};`
    );

    return fn(
        ...Object.values(values)
    );
};

const startFunc = ({
    currentInput, inClosestControl
}) => {

    const closestTr = inClosestControl;

    const values = Object.fromEntries(
        [...closestTr.querySelectorAll("input")]
            .map(i => [i.name, Number(i.value) || 0])
    );

    const amount = evaluateFormula({
        formula: "Amount / Qty",
        values
    });

    closestTr.querySelector('input[name="OrigRate"]').value = amount.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${amount}`
    });
};

export default startFunc;