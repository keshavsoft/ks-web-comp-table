import createInputRows from "../../../commonInputBuilder/createInputRows.js";
import { createSaveButton } from "./Buttons/createSaveButton.js";
import { createUpdateButton } from "./Buttons/createUpdateButton.js";
import { createCancelButton } from "./Buttons/createCancelButton.js";
import { createEditButton } from "./Buttons/createEditButton.js";

/**
 * Creates and returns a table footer <tr> element containing inputs and action buttons.
 *
 * @param {Object} options - Configuration and options data.
 * @param {Object} inputs - Reference object where generated input components will be stored.
 * @param {Object} inServices - Services used by action buttons.
 * @param {Object} inConfig - Table config used by callbacks.
 * @param {HTMLElement} [element] - Optional parent element context (needed by cancel/edit buttons).
 * @returns {HTMLTableRowElement} The created footer <tr> row.
 */
export const createTfootRow = ({ options, inputs, inServices, inConfig, element }) => {
    const {
        showSaveButton = false,
        inDefaultRow = {},
        inSearchableColumnsConfig = [],
        inDataStore,
        inVerticalOptions
    } = options;

    const isEdit = inVerticalOptions?.isEdit || false;
    const isCreate = inVerticalOptions?.isCreate || false;
    const isModeDefined = inVerticalOptions ? (("isEdit" in inVerticalOptions) || ("isCreate" in inVerticalOptions)) : false;

    // Build the input rows into the shared inputs mapping object
    createInputRows({
        inSearchableColumnsConfig,
        inDefaultRow,
        inDataStore,
        inputs
    });

    const showSerial = options?.table?.showSerial ?? true;
    const showActions = options?.table?.showActions ?? true;

    // Create the footer <tr> element
    const footerRow = document.createElement("tr");
    footerRow.className = "bg-yellow-50/50 border-t border-gray-200";

    // 1. Serial column spacer
    if (showSerial) {
        const tdSerial = document.createElement("td");
        tdSerial.className = "px-4 py-3 text-sm text-gray-500 font-medium text-center w-12";
        footerRow.appendChild(tdSerial);
    }

    // 2. Input cells mapping
    inSearchableColumnsConfig.forEach(col => {
        const td = document.createElement("td");
        td.className = "px-4 py-2 align-middle";

        const inputComp = inputs[col.columnName];
        if (inputComp) {
            inputComp.className = "w-full";
            td.appendChild(inputComp);
        }
        footerRow.appendChild(td);
    });

    // 3. Actions cell containing buttons (Save / Update / Cancel)
    if (showActions) {
        const tdActions = document.createElement("td");
        tdActions.className = "px-4 py-2 align-middle w-24";

        const btnContainer = document.createElement("div");
        btnContainer.className = "flex gap-2 items-center justify-start";

        if (isModeDefined) {
            if (isCreate) {
                const saveBtn = createSaveButton({ options, inServices, inConfig });
                btnContainer.appendChild(saveBtn);
            } else if (isEdit) {
                const updateBtn = createUpdateButton({ options, inServices, inConfig });
                const cancelBtn = createCancelButton({ options, element });
                btnContainer.append(updateBtn, cancelBtn);
            } else {
                const editBtn = createEditButton({ options, element });
                btnContainer.appendChild(editBtn);
            }
        } else if (showSaveButton) {
            const saveBtn = createSaveButton({ options, inServices, inConfig });
            btnContainer.appendChild(saveBtn);
        }

        tdActions.appendChild(btnContainer);
        footerRow.appendChild(tdActions);
    }

    return footerRow;
};

window.createTfootRow = createTfootRow;

export default createTfootRow;
