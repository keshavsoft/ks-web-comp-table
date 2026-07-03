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

    const numCols = inSearchableColumnsConfig.length || 3;
    const defaultFieldsetClass = `grid grid-cols-${numCols} gap-x-8 gap-y-4 p-2 verticalForm`;

    const form = createForm({ uiClasses });
    const fieldset = createFieldset({ uiClasses, inIsDisabled: isFormDisabled, defaultFieldsetClass });

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
