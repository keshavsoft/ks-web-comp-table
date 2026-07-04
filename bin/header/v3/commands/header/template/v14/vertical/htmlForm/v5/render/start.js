import createForm from "./createForm.js";
import createFieldset from "./createFieldset.js";
import appendInputRows from "./appendInputRows.js";
import { appendSaveButton } from "../appendSaveButton.js";
import { appendEditButton } from "../appendEditButton.js";
import { appendCancelButton } from "../appendCancelButton.js";
import { appendUpdateButton } from "../appendUpdateButton.js";

const renderForm = ({ element, options, inputs }) => {
    const {
        showSaveButton = false,
        inDefaultRow = {},
        uiClasses = {},
        inIsDisabled,
        inServices,
        inConfig,
        inSearchableColumnsConfig = [],
        inDataStore,
        inVerticalOptions
    } = options;

    const isEdit = options.inVerticalOptions.isEdit || false;
    const isCreate = options.inVerticalOptions.isCreate || false;
    const isModeDefined = ("isEdit" in options.inVerticalOptions) || ("isCreate" in options.inVerticalOptions);

    const isFormDisabled = isModeDefined ? (!isEdit && !isCreate) : (inIsDisabled || false);

    const form = createForm();
    const fieldset = createFieldset({ uiClasses, inIsDisabled: isFormDisabled });

    form.appendChild(fieldset);

    appendInputRows({
        fieldset,
        inSearchableColumnsConfig,
        inDefaultRow,
        inDataStore,
        inputs
    });

    const buttonRow = document.createElement("div");
    buttonRow.className = "flex gap-2 w-full mt-2";

    if (isModeDefined) {
        if (isCreate) {
            appendSaveButton({ form: buttonRow, inServices, inConfig });
        } else if (isEdit) {
            appendUpdateButton({ form: buttonRow, inServices, inConfig });
            appendCancelButton({ form: buttonRow, element });
        } else {
            appendEditButton({ form: buttonRow, element });
        }
        form.appendChild(buttonRow);
    } else if (showSaveButton) {
        appendSaveButton({ form: buttonRow, inServices, inConfig });
        form.appendChild(buttonRow);
    }

    element.appendChild(form);
};

export default renderForm;
