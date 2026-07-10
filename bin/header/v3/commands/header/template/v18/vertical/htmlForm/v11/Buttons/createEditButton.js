import defaultOptions from "../defaultOptions.js";

const toggleButtonDisplay = (inButton) => {
    const closestButtonsRow = inButton.closest(".buttonsRow");
    if (!closestButtonsRow) return;

    const editBtn = closestButtonsRow.querySelector(".editButtonClass");
    const updateBtn = closestButtonsRow.querySelector(".updateButtonClass");
    const cancelBtn = closestButtonsRow.querySelector(".cancelButtonClass");

    inButton.style.display = "none";
    if (updateBtn) updateBtn.style.display = "";
    if (cancelBtn) cancelBtn.style.display = "";
};

const enableFieldset = (inButton) => {
    const fieldset = inButton.closest("form")?.querySelector("fieldset");
    if (fieldset) fieldset.removeAttribute("disabled");
};

const getNearestCompTag = (input) => {
    let parent = input.parentElement;
    while (parent && parent !== document.body) {
        if (parent.tagName.includes("-")) {
            return parent;
        }
        parent = parent.parentElement;
    }
    return null;
};

const storeCurrentValues = (inButton) => {
    const form = inButton.closest("form");
    if (!form) return;

    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        const compTag = getNearestCompTag(input);
        if (compTag) {
            compTag.setAttribute("presentvalue", input.value);
        }
    });
};

export const createEditButton = ({ options = {}, element }) => {
    const button = document.createElement("ks-button");
    button.init({
        text: options.editButtonText || "Edit",
        class: options.editButtonClass || options.uiClasses?.editButtonClass || options.uiClasses?.buttonRow?.buttons?.edit || options.uiClasses?.form?.buttonRow?.buttons?.edit || defaultOptions.uiClasses.form.buttonRow.buttons.edit
    });

    button.onClick = () => {
        toggleButtonDisplay(button);
        enableFieldset(button);
        storeCurrentValues(button);
    };

    return button;
};
