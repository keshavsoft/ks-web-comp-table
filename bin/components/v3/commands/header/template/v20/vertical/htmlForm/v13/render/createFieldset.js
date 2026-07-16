import defaultOptions from "../defaultOptions.js";

const createFieldset = ({ fieldsetClass = {}, inIsDisabled, inPk }) => {
    const fieldset = document.createElement("fieldset");
    // console.log("fieldsetClass : ", fieldsetClass);

    // const baseClass = uiClasses.fieldsetClass || uiClasses.formClass || uiClasses.fieldset?.class || uiClasses.form?.fieldset?.class || defaultOptions.uiClasses.form.fieldset.class;

    const baseClass = fieldsetClass;

    fieldset.className = `${baseClass} flex-grow`;
    fieldset.disabled = inIsDisabled;
    if (inPk) fieldset.dataset.pk = inPk;

    return fieldset;
};

export default createFieldset;
