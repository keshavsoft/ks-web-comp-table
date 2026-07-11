const getClosestButton = (target, tagName) => target.closest(tagName);

const getForm = (element) => element?.closest("form");

const getFormData = (form) => {
    if (!form) return {};
    const inputs = [...form.querySelectorAll("input")];
    return Object.fromEntries(inputs.map(input => [input.name, input.value]));
};

const getPk = (form) => {
    const fieldset = form.querySelector("fieldset");
    // console.log("aaaaaaa : ", fieldset.dataset);

    return fieldset.dataset?.pk;
};

const attachClickEvent = (button, inTagName = "ks-button") => {
    button.addEventListener("click", event => {
        event.preventDefault();

        const ksButton = getClosestButton(event.currentTarget, inTagName);
        if (!ksButton) return;

        const form = getForm(ksButton);
        const data = getFormData(form);
        const pk = getPk(form);

        if (pk) data.pk = pk;
        console.log("bbbbbb : ", pk);
        ksButton.onClick?.(data);
    });
};

export default attachClickEvent;
