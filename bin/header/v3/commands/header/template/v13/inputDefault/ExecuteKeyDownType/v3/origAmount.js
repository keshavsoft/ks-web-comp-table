import showCalcMessage from "./showCalcMessage.js";

const fn = new Function(
    "Rate",
    "Qty",
    "return Rate * Qty;"
);

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
    const formula = "Rate * Qty";

    const closestTr = inClosestControl;

    const origAmount = currentInput.value;
    const qty = closestTr.querySelector('[name="Qty"]').value

    const amount = evaluateFormula({
        formula: "Rate * Qty",
        values: {
            Rate: 100,
            Qty: 10
        }
    });

    console.log(amount);

    closestTr.querySelector('[name="OrigRate"]').value = (origAmount / qty).toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${origAmount}`
    });
};

export default startFunc;