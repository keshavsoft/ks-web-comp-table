/**
 * Clones a custom element and copies custom JS properties.
 *
 * Gotcha: cloneNode(true) only copies standard HTML attributes/DOM structures.
 * It does NOT copy custom JS properties (like ksName, dataStore) assigned in memory.
 * We must copy them manually so the custom element's connectedCallback() runs correctly.
 *
 * @param {HTMLElement} footerInput - The source element to clone.
 * @returns {HTMLElement} The cloned element with properties copied.
 */
const cloneFooterInput = (footerInput) => {
    const clonedInput = footerInput.cloneNode(true);
    
    clonedInput.ksName = footerInput.ksName;
    clonedInput.dataStore = footerInput.dataStore;
    clonedInput.ksPlaceholder = footerInput.ksPlaceholder;
    clonedInput.ksClassName = footerInput.ksClassName;
    clonedInput.ksInputClassName = footerInput.ksInputClassName;
    clonedInput.ksOnKeyDown = footerInput.ksOnKeyDown;
    clonedInput.ksShowDataList = footerInput.ksShowDataList;
    clonedInput.ksInColumnsConfig = footerInput.ksInColumnsConfig;
    clonedInput.ksOnChangeType = footerInput.ksOnChangeType;
    clonedInput.ksRightAlign = footerInput.ksRightAlign;
    clonedInput.ksWidth = footerInput.ksWidth;

    return clonedInput;
};

/**
 * Replaces the content of a row td with a clone of the corresponding footer input element.
 *
 * @param {HTMLTableCellElement} td - The table row cell to replace.
 * @param {HTMLTableCellElement} footerTd - The matching table footer cell.
 */
const replaceCellWithFooterInput = (td, footerTd) => {
    if (!footerTd) return;
    
    // Find the input element (could be a custom element or a native input)
    const footerInput = footerTd.querySelector("ks-table-footer-input, ks-input, input");
    if (!footerInput) return;

    const clonedInput = cloneFooterInput(footerInput);
    td.replaceChildren(clonedInput);
};

/**
 * Main execution handler when the Edit button is clicked.
 * Loops through the row's tds and replaces each data cell with a cloned footer input.
 */
const startFunc = ({ event, item, index, onEditFunc }) => {
    const localCurrentTarget = event.currentTarget;
    const closestTable = localCurrentTarget.closest("table");
    const closestTr = localCurrentTarget.closest("tr");

    if (closestTable && closestTr) {
        const tds = closestTr.querySelectorAll("td");
        const footerTds = closestTable.querySelectorAll("tfoot tr td");

        tds.forEach((td, i) => {
            replaceCellWithFooterInput(td, footerTds[i]);
        });
    }

    onEditFunc?.({ item, index, presentPk: item?.pk });
};

export default startFunc;
