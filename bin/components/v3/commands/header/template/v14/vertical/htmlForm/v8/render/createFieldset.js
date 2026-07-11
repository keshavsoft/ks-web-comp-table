const createFieldset = ({ uiClasses = {}, inIsDisabled }) => {
    const fieldset = document.createElement("fieldset");

    fieldset.className = uiClasses.fieldsetClass || 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm';
    fieldset.disabled = inIsDisabled;

    return fieldset;
};

export default createFieldset;
