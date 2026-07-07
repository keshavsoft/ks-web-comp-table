import commonFuncToRun from "./commonFunc.js";

const executeKeyDownType = ({
    currentInput,
    inDefaultRow, closestTagIsTr
}) => {
    let closestControl;

    let el = currentInput.parentElement;

    while (el && !el.tagName.includes("-")) {
        el = el.parentElement;
    };

    const onKeyDownType = el.getAttribute("onKeyDownType");

    // const ksOnKeyDownType = currentTarget.getAttribute("onKeyDownType");

    if (closestTagIsTr) {
        closestControl = currentInput.closest("body");
    };

    if (onKeyDownType) {
        commonFuncToRun({
            currentInput, inClosestControl: closestControl
        });
    };
};

export default executeKeyDownType;