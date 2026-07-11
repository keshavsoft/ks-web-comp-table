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


    const formula = el.getAttribute("evalformula");
    const evalToControl = el.getAttribute("evalToControl");
    const allInputs = closestTr.querySelectorAll("input");

    // const currentName
    const values = Object.fromEntries(
        [...allInputs].map(i => [i.name, Number(i.value) || 0])
    );
    console.log("currentInput----------- : ", values, allInputs, currentInput, inClosestControl, el);

    const toShowValue = evaluateFormula({
        formula, values
    });

    closestTr.querySelector(`input[name="${evalToControl}"]`).value = toShowValue.toFixed(2);

    showCalcMessage({
        input: currentInput,
        message: `Amount change : ${toShowValue}`
    });
};

export default startFunc;