import showCalcMessage from "./showCalcMessage.js";

const fn = new Function(
    "Rate",
    "Qty",
    "return Rate * Qty;"
);

const evaluateFormula = ({ formula, values }) => {
    console.log("formula, values : ", formula, values);

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
    const formula = "Rate * Qty";

    const closestTr = inClosestControl;

    const origRateValue = currentInput.value;
    const qty = closestTr.querySelector('input[name="Qty"]').value

    const amount = evaluateFormula({
        formula: "Rate * Qty",
        values: {
            Rate: Number(origRateValue),
            Qty: Number(qty)
        }
    });

    closestTr.querySelector('input[name="Amount"]').value = amount.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${amount}`
    });
};

export default startFunc;