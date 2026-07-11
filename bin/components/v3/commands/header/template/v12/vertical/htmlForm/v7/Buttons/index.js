import { createSaveButton } from "./createSaveButton.js";
import { createEditButton } from "./createEditButton.js";
import { createCancelButton } from "./createCancelButton.js";
import { createUpdateButton } from "./createUpdateButton.js";

export const appendButtons = ({ form, element, options = {}, inServices, inConfig }) => {
    const showSaveButton = options.showSaveButton || false;
    const isEdit = options?.inVerticalOptions?.isEdit || false;
    const isCreate = options?.inVerticalOptions?.isCreate || false;
    const isModeDefined = options?.inVerticalOptions ? (("isEdit" in options.inVerticalOptions) || ("isCreate" in options.inVerticalOptions)) : false;

    if (!isModeDefined && !showSaveButton) return;

    const buttonRow = document.createElement("div");
    buttonRow.className = "flex gap-2 w-full mt-2";

    if (isModeDefined) {
        if (isCreate) {
            const saveBtn = createSaveButton({ inServices, inConfig });
            buttonRow.appendChild(saveBtn);
        } else if (isEdit) {
            const updateBtn = createUpdateButton({ inServices, inConfig });
            const cancelBtn = createCancelButton({ element });
            buttonRow.append(updateBtn, cancelBtn);
        } else {
            const editBtn = createEditButton({ element });
            buttonRow.appendChild(editBtn);
        }
        form.appendChild(buttonRow);
    } else if (showSaveButton) {
        const saveBtn = createSaveButton({ inServices, inConfig });
        buttonRow.appendChild(saveBtn);
        form.appendChild(buttonRow);
    }
};
