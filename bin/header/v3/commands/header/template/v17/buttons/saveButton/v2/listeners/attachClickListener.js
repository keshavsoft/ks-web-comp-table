import checkFooterInputsNonEmpty from "../validation/checkFooterInputsNonEmpty.js";

/**
 * Helper to query and extract all input names and values from the closest footer element.
 */
const extractFooterData = (currentTarget) => {
    const closestFooter = currentTarget.closest("tfoot");
    if (!closestFooter) return {};

    const inputs = closestFooter.querySelectorAll("input");
    const data = {};

    inputs.forEach((input) => {
        data[input.name] = input.value;
    });

    return data;
};

const attachClickListener = ({ htmlElement, inOnSaveFunc }) => {
    htmlElement.onclick = (e) => {
        if (e && typeof e.preventDefault === "function") {
            e.preventDefault();
        }

        const currentTarget = e.currentTarget;
        const tableFooter = currentTarget.closest("tfoot");

        const localIsFooterInputsNonEmpty = checkFooterInputsNonEmpty({ inTableFooter: tableFooter });

        const data = extractFooterData(currentTarget);

        inOnSaveFunc({
            dataFromDom: data,
            inCurrentTarget: currentTarget,
            canSave: localIsFooterInputsNonEmpty
        });
    };
};

export { attachClickListener };
