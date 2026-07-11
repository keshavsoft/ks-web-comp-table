import defaultOptions from "../defaultOptions.js";

const createFieldset = ({ uiClasses = {}, inIsDisabled }) => {
    const fieldset = document.createElement("fieldset");

    const baseClass = uiClasses.fieldsetClass || uiClasses.formClass || uiClasses.fieldset?.class || uiClasses.form?.fieldset?.class || defaultOptions.uiClasses.form.fieldset.class;
    fieldset.className = `${baseClass} flex-grow`;
    fieldset.disabled = inIsDisabled;

    return fieldset;
};

export default createFieldset;
