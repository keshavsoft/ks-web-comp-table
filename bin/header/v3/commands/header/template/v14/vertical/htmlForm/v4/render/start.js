import createForm from "./createForm.js";
import createFieldset from "./createFieldset.js";
import appendInputRows from "./appendInputRows.js";
import { appendSaveButton } from "../appendSaveButton.js";

const renderForm = ({ element, options, inputs }) => {
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

    const form = createForm();
    const fieldset = createFieldset({ uiClasses, inIsDisabled });

    form.appendChild(fieldset);

    appendInputRows({
        fieldset,
        inSearchableColumnsConfig,
        inDefaultRow,
        inDataStore,
        inputs
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

export default renderForm;
