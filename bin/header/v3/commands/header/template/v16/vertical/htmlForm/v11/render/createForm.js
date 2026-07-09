import defaultOptions from "../defaultOptions.js";

const createForm = ({ uiClasses = {} } = {}) => {
    const form = document.createElement("form");

    form.className = uiClasses.outerFormClass || uiClasses.formClass || uiClasses.form?.class || defaultOptions.uiClasses.form.class;
    form.setAttribute("onsubmit", "event.preventDefault();");

    return form;
};

export default createForm;
