import { createInputRow } from "./createInputRow.js";
import { appendSaveButton } from "./appendSaveButton.js";

export const renderForm = ({ element, options, inputs }) => {
    const {
        showSaveButton = false,
        inDefaultRow = {},
        uiClasses = {},
        inIsDisabled,
        inServices,
        inConfig,
        inSearchableColumnsConfig = [],
        inDataStore
    } = options;

    const form = document.createElement("form");

    const fieldset = document.createElement("fieldset");
    fieldset.className = uiClasses.formClass || 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm';
    fieldset.disabled = inIsDisabled;

    form.appendChild(fieldset);

    inSearchableColumnsConfig.forEach(col => {
        const row = createInputRow({
            inCol: col,
            inDefaultRow,
            inDataStore,
            inputs: inputs
        });
        if (row) {
            fieldset.appendChild(row);
        }
    });

    if (showSaveButton) {
        appendSaveButton({
            form,
            inServices,
            inConfig
        });
    }

    element.appendChild(form);
};
