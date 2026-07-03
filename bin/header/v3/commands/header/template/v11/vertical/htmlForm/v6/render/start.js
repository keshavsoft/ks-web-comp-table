import createForm from "./createForm.js";
import createFieldset from "./createFieldset.js";
import appendInputRows from "./appendInputRows.js";
import { appendButtons } from "../Buttons/index.js";

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

    const isEdit = inVerticalOptions?.isEdit || false;
    const isCreate = inVerticalOptions?.isCreate || false;
    const isModeDefined = inVerticalOptions ? (("isEdit" in inVerticalOptions) || ("isCreate" in inVerticalOptions)) : false;

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
