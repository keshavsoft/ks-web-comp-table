import defaultOptions from "../defaultOptions.js";

export const createCancelButton = ({ options = {}, element }) => {
    const button = document.createElement("ks-button");
    button.init({
        text: options.cancelButtonText || "Cancel",
        class: options.cancelButtonClass || options.uiClasses?.cancelButtonClass || options.uiClasses?.buttonRow?.buttons?.cancel || options.uiClasses?.form?.buttonRow?.buttons?.cancel || defaultOptions.uiClasses.form.buttonRow.buttons.cancel
    });

    button.onClick = () => {
        const closestButtonsRow = button.closest(".buttonsRow");
        const saveBtn = closestButtonsRow.querySelector(".saveButtonClass");
        const editBtn = closestButtonsRow.querySelector(".editButtonClass");
        const updateBtn = closestButtonsRow.querySelector(".updateButtonClass");
        const cancelBtn = closestButtonsRow.querySelector(".cancelButtonClass");

        button.style.display = "none";      // Hides Cancel button
        updateBtn.style.display = "none";   // Hides Update button
        editBtn.style.display = "";         // Shows Edit button

        const fieldset = closestButtonsRow.closest("form")?.querySelector("fieldset");
        if (fieldset) fieldset.setAttribute("disabled", "true");

        // if (element.options && element.options.inVerticalOptions) {
        //     element.options.inVerticalOptions.isEdit = false;
        // }
        // element.render();
    };

    return button;
};
