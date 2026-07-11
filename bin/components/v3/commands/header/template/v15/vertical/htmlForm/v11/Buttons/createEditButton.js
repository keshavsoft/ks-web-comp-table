import defaultOptions from "../defaultOptions.js";

export const createEditButton = ({ options = {}, element }) => {
    const button = document.createElement("ks-button");
    button.init({
        text: options.editButtonText || "Edit",
        class: options.editButtonClass || options.uiClasses?.editButtonClass || options.uiClasses?.buttonRow?.buttons?.edit || options.uiClasses?.form?.buttonRow?.buttons?.edit || defaultOptions.uiClasses.form.buttonRow.buttons.edit
    });

    button.onClick = () => {
        const closestButtonsRow = button.closest(".buttonsRow");
        const saveBtn = closestButtonsRow.querySelector(".saveButtonClass");
        const editBtn = closestButtonsRow.querySelector(".editButtonClass");
        const updateBtn = closestButtonsRow.querySelector(".updateButtonClass");
        const cancelBtn = closestButtonsRow.querySelector(".cancelButtonClass");

        button.style.display = "none";
        updateBtn.style.display = "";
        cancelBtn.style.display = "";

        const fieldset = closestButtonsRow.closest("form")?.querySelector("fieldset");
        if (fieldset) fieldset.removeAttribute("disabled");

        // if (element.options && element.options.inVerticalOptions) {
        //     element.options.inVerticalOptions.isEdit = true;
        // }
        // element.render();
    };

    return button;
};
