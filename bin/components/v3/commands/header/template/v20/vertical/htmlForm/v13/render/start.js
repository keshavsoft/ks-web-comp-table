import createForm from "./createForm.js";
import createFieldset from "./createFieldset.js";
import createInputRows from "../../../../commonInputBuilder/createInputRows.js";
import { appendButtons } from "../Buttons/index.js";

const localIsFormDisabled = ({ isModeDefined, isEdit, isCreate, inIsDisabled }) => {
    if (!isModeDefined) return inIsDisabled || false;

    if (isCreate) return false;
    if (isEdit) return true;

    return true;
};

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

    if (window.ksShowLogTree.components.vertical.htmlForm) console.log("window.ksShowLogTree.components.vertical.htmlForm - renderForm options : ", options);
    // console.log('inVerticalOptions : ', inVerticalOptions);

    const isEdit = inVerticalOptions?.isEdit || false;
    const isCreate = inVerticalOptions?.isCreate || false;
    const isModeDefined = inVerticalOptions ? (("isEdit" in inVerticalOptions) || ("isCreate" in inVerticalOptions)) : false;

    const isFormDisabled = localIsFormDisabled({ isModeDefined, isEdit, isCreate, inIsDisabled });

    const form = createForm({ formClass: uiClasses.form?.class });
    // console.log("uiClasses------ : ", uiClasses);

    const fieldset = createFieldset({
        fieldsetClass: uiClasses.form.fieldset?.class,
        inIsDisabled: isFormDisabled,
        inPk: inDefaultRow?.pk
    });

    form.appendChild(fieldset);

    const inputsFragment = createInputRows({
        inColumnsConfig,
        inDefaultRow,
        inDataStore,
        rowClass: uiClasses?.form?.column?.rowClass
    });

    fieldset.appendChild(inputsFragment);

    if (inVerticalOptions?.showButtons) {
        appendButtons({
            form,
            element,
            options,
            inServices,
            inConfig
        });

    };

    element.appendChild(form);
};

export default renderForm;
