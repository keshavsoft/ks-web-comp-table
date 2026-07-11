import defaultOptions from "../defaultOptions.js";

const createFieldset = ({ uiClasses = {}, inIsDisabled, inPk }) => {
    const fieldset = document.createElement("fieldset");
    // console.log("inDefaultRow : ", inPk);

    const baseClass = uiClasses.fieldsetClass || uiClasses.formClass || uiClasses.fieldset?.class || uiClasses.form?.fieldset?.class || defaultOptions.uiClasses.form.fieldset.class;
    fieldset.className = `${baseClass} flex-grow`;
    fieldset.disabled = inIsDisabled;
    if (inPk) fieldset.dataset.pk = inPk;

    return fieldset;
};

export default createFieldset;
