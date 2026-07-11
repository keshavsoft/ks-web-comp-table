import showCalcMessage from "./showCalcMessage.js";

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
    const closestTr = inClosestControl;
    let el = currentInput.parentElement;

    while (el && !el.tagName.includes("-")) {
        el = el.parentElement;
    };

    const formula = el.getAttribute("evalformula");
    const evalToControl = el.getAttribute("evalToControl");

    // const currentName
    const values = Object.fromEntries(
        [...closestTr.querySelectorAll("input")]
            .map(i => [i.name, Number(i.value) || 0])
    );

    const toShowValue = evaluateFormula({
        formula, values
    });
    // console.log("aaaaaa : ", evalToControl, toShowValue);

    // closestTr.querySelector('input[name="Amount"]').value = toShowValue.toFixed(2);
    closestTr.querySelector(`input[name="${evalToControl}"]`).value = toShowValue.toFixed(2);

    // evalToControl.value = toShowValue.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${toShowValue}`
    });
};

export default startFunc;