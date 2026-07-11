import defaultOptions from "../defaultOptions.js";

const toggleButtonDisplay = (inButton) => {
    const closestButtonsRow = inButton.closest(".buttonsRow");
    if (!closestButtonsRow) return;

    const editBtn = closestButtonsRow.querySelector(".editButtonClass");
    const updateBtn = closestButtonsRow.querySelector(".updateButtonClass");

    inButton.style.display = "none";      // Hides Cancel button
    if (updateBtn) updateBtn.style.display = "none";   // Hides Update button
    if (editBtn) editBtn.style.display = "";         // Shows Edit button
};

const disableFieldset = (inButton) => {
    const fieldset = inButton.closest("form")?.querySelector("fieldset");
    if (fieldset) fieldset.setAttribute("disabled", "true");
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

const restoreInputValues = (inButton) => {
    const form = inButton.closest("form");
    if (!form) return;

    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        const compTag = getNearestCompTag(input);
        if (compTag) {
            const presentValue = compTag.getAttribute("presentvalue");
            const ksinvalue = compTag.getAttribute("ksinvalue");

            if (presentValue !== null) {
                input.value = presentValue;
            } else if (ksinvalue !== null) {
                input.value = ksinvalue;
            }
        }
    });
};

export const createCancelButton = ({ options = {}, element }) => {
    const button = document.createElement("ks-button");
    button.init({
        text: options.cancelButtonText || "Cancel",
        class: options.cancelButtonClass || options.uiClasses?.cancelButtonClass || options.uiClasses?.buttonRow?.buttons?.cancel || options.uiClasses?.form?.buttonRow?.buttons?.cancel || defaultOptions.uiClasses.form.buttonRow.buttons.cancel
    });

    button.onClick = () => {
        toggleButtonDisplay(button);
        disableFieldset(button);
        restoreInputValues(button);
    };

    return button;
};
