import { appendSaveButton } from "./appendSaveButton.js";
import { appendEditButton } from "./appendEditButton.js";
import { appendCancelButton } from "./appendCancelButton.js";
import { appendUpdateButton } from "./appendUpdateButton.js";

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
            appendSaveButton({ form: buttonRow, inServices, inConfig });
        } else if (isEdit) {
            appendUpdateButton({ form: buttonRow, inServices, inConfig });
            appendCancelButton({ form: buttonRow, element });
        } else {
            appendEditButton({ form: buttonRow, element });
        }
        form.appendChild(buttonRow);
    } else if (showSaveButton) {
        appendSaveButton({ form: buttonRow, inServices, inConfig });
        form.appendChild(buttonRow);
    }
};
