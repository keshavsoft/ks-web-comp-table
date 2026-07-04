import createForm from "./createForm.js";
import createFieldset from "./createFieldset.js";
import createInputRows from "../../../../commonInputBuilder/createInputRows.js";
import { appendButtons } from "../Buttons/index.js";

const renderForm = ({ element, options }) => {
    const {
        showSaveButton = false,
        inDefaultRow = {},
        uiClasses = {},
        inIsDisabled,
        inServices,
        inConfig,
        inColumnsConfig = [],
        inDataStore,
        inVerticalOptions
    } = options;

    const isEdit = inVerticalOptions?.isEdit || false;
    const isCreate = inVerticalOptions?.isCreate || false;
    const isModeDefined = inVerticalOptions ? (("isEdit" in inVerticalOptions) || ("isCreate" in inVerticalOptions)) : false;

    const isFormDisabled = isModeDefined ? (!isEdit && !isCreate) : (inIsDisabled || false);

    const form = createForm({ uiClasses });
    const fieldset = createFieldset({ uiClasses, inIsDisabled: isFormDisabled });

    form.appendChild(fieldset);

    const inputsFragment = createInputRows({
        inColumnsConfig,
        inDefaultRow,
        inDataStore
    });

    fieldset.appendChild(inputsFragment);

    appendButtons({
        form,
        element,
        options,
        inServices,
        inConfig
    });

    element.appendChild(form);
};

export default renderForm;
