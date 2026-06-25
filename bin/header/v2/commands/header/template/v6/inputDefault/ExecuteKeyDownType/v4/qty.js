import showCalcMessage from "./showCalcMessage.js";

const evaluateFormula = ({ formula, values }) => {
    // console.log("formula, values : ", formula, values);

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
    let el = currentInput.parentElement;

    while (el && !el.tagName.includes("-")) {
        el = el.parentElement;
    };

    // console.log("aaaa : ", el);

    const values = Object.fromEntries(
        [...closestTr.querySelectorAll("input")]
            .map(i => [i.name, Number(i.value) || 0])
    );

    // const amount = evaluateFormula({
    //     formula: "OrigRate * Qty",
    //     values
    // });
    const amount = evaluateFormula({
        formula: el.getAttribute("evalformula"),
        values
    });

    closestTr.querySelector('input[name="Amount"]').value = amount.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${amount}`
    });
};

export default startFunc;