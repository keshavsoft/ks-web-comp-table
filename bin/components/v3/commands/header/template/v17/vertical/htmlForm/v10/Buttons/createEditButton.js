import defaultOptions from "../defaultOptions.js";

export const createEditButton = ({ options = {}, element }) => {
    const button = document.createElement("ks-button");
    button.init({ 
        text: options.editButtonText || "Edit", 
        class: options.editButtonClass || options.uiClasses?.editButtonClass || options.uiClasses?.buttonRow?.buttons?.edit || options.uiClasses?.form?.buttonRow?.buttons?.edit || defaultOptions.uiClasses.form.buttonRow.buttons.edit
    });

    button.onClick = () => {
        if (element.options && element.options.inVerticalOptions) {
            element.options.inVerticalOptions.isEdit = true;
        }
        element.render();
    };

    return button;
};
