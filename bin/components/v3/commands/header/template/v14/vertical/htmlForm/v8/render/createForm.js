const createForm = ({ uiClasses = {} } = {}) => {
    const form = document.createElement("form");

    form.className = uiClasses.formClass || 'flex flex-row items-end gap-4';

    return form;
};

export default createForm;
