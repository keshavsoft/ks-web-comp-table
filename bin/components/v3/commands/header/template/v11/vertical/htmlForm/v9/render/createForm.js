import defaultOptions from "../defaultOptions.js";

const createForm = ({ uiClasses = {} } = {}) => {
    const form = document.createElement("form");

    form.className = uiClasses.outerFormClass || uiClasses.formClass || uiClasses.form?.class || defaultOptions.uiClasses.form.class;

    return form;
};

export default createForm;
