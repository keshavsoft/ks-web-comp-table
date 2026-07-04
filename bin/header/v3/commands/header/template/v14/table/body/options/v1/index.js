import getOptions from "./getOptions.js";
import applyStyle from "./applyStyle.js";
import createEditButton from "./createEditButton.js";
import createDeleteButton from "./createDeleteButton.js";
import render from "./render.js";

class KsTableBodyOptionsCell extends HTMLElement {
    connectedCallback() {
        const localOptions = getOptions({ inElement: this });

        applyStyle({ inElement: this });

        const editBtn = localOptions.showEdit ? createEditButton(localOptions) : null;
        const deleteBtn = localOptions.showDelete ? createDeleteButton(localOptions) : null;

        render({
            inElement: this,
            editBtn,
            deleteBtn
        });
    }
}

if (!customElements.get("ks-table-body-options-cell")) {
    customElements.define("ks-table-body-options-cell", KsTableBodyOptionsCell);
}

export { KsTableBodyOptionsCell };
