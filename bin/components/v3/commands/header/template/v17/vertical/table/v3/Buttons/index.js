import defaultOptions from "../defaultOptions.js";
import { createSaveButton } from "./createSaveButton.js";
import { createEditButton } from "./createEditButton.js";
import { createCancelButton } from "./createCancelButton.js";
import { createUpdateButton } from "./createUpdateButton.js";

export const appendButtons = ({ form, element, options = {}, inServices, inConfig }) => {
    // console.log("options ----------: ", options);

    const showSaveButton = options.showSaveButton || false;
    const isEdit = options?.inVerticalOptions?.isEdit || false;
    const isCreate = options?.inVerticalOptions?.isCreate || false;
    const isModeDefined = options?.inVerticalOptions ? (("isEdit" in options.inVerticalOptions) || ("isCreate" in options.inVerticalOptions)) : false;

    if (!isModeDefined && !showSaveButton) return;

    const buttonRow = document.createElement("div");
    buttonRow.className = options.uiClasses?.buttonRowClass || options.uiClasses?.buttonRow?.class || options.uiClasses?.form?.buttonRow?.class || defaultOptions.uiClasses.form.buttonRow.class;

    if (isModeDefined) {
        if (isCreate) {
            const saveBtn = createSaveButton({ options, inServices, inConfig });
            buttonRow.appendChild(saveBtn);
        } else if (isEdit) {
            const updateBtn = createUpdateButton({ options, inServices, inConfig });
            const cancelBtn = createCancelButton({ options, element });
            buttonRow.append(updateBtn, cancelBtn);
        } else {
            const editBtn = createEditButton({ options, element });
            buttonRow.appendChild(editBtn);
        }
        form.appendChild(buttonRow);
    } else if (showSaveButton) {
        const saveBtn = createSaveButton({ options, inServices, inConfig });
        buttonRow.appendChild(saveBtn);
        form.appendChild(buttonRow);
    }
};
