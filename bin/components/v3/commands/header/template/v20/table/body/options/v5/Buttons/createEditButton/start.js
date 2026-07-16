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

const localCleanValue = ({ inClonedInput, inVal }) => {
    const type = inClonedInput.getAttribute("ks-type") || inClonedInput.getAttribute("ksType") || inClonedInput.getAttribute("type");
    // console.log("type : ", type);

    if (type === "number") {
        if (typeof inVal === "string" && inVal.includes(",")) {
            return inVal.replace(/,/g, "");
        }
    }
    return inVal;
};

/**
 * Replaces the content of a row td with a clone of the corresponding footer input element.
 *
 * @param {HTMLTableCellElement} td - The table row cell to replace.
 * @param {HTMLTableCellElement} footerTd - The matching table footer cell.
 * @param {Object} item - The current row data object.
 */
export const replaceCellWithFooterInput = (td, footerTd, item) => {
    if (!footerTd) return;

    // Find the input element (could be a custom element or a native input)
    const footerInput = footerTd.querySelector("ks-table-footer-input, ks-input, input");
    if (!footerInput) return;

    const clonedInput = cloneFooterInput(footerInput);

    const rawVal = td.dataset.oldValue !== undefined ? td.dataset.oldValue : "";
    // console.log("rawVal : ", rawVal);

    const val = localCleanValue({ inClonedInput: clonedInput, inVal: rawVal });
    clonedInput.setAttribute("ksInValue", val);
    clonedInput.setAttribute("value", val);
    // clonedInput.value = val;

    td.replaceChildren(clonedInput);
};

/**
 * Main execution handler when the Edit button is clicked.
 * Loops through the row's tds and replaces each data cell with a cloned footer input.
 * Hides Edit and Delete, then displays Update and Cancel buttons.
 */
const startFunc = ({ event, item, index, onEditFunc }) => {
    const editBtn = event.currentTarget;
    const actionsCell = editBtn.parentElement;
    const closestTr = editBtn.closest("tr");
    const closestTable = closestTr.closest("table");

    // 2. Clone footer inputs and replace cell content (saving original state)
    const tds = closestTr.querySelectorAll("td");
    const footerTds = closestTable.querySelectorAll("tfoot tr td");

    tds.forEach((td, i) => {
        if (i === tds.length - 1) return;
        td.dataset.oldValue = td.textContent;
        replaceCellWithFooterInput(td, footerTds[i], item);
    });

    const updateButton = actionsCell.querySelector("button.updateButton")
    updateButton.style.display = "";

    const cancelBtn = actionsCell.querySelector("button.cancelButton")
    cancelBtn.style.display = "";

    const deleteButton = actionsCell.querySelector("button.deleteButton")
    deleteButton.style.display = "none";

    editBtn.style.display = "none";

    // onEditFunc?.({ item, index, presentPk: item?.pk });
};

export default startFunc;
