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

const attachClickListener = ({ htmlButtonElement, inOnSaveFunc }) => {
    htmlButtonElement.onclick = (e) => {
        e.preventDefault();

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
