import getOptions from "./getOptions.js";
import applyStyle from "./applyStyle.js";
import createEditButton from "./Buttons/createEditButton/index.js";
import createDeleteButton from "./Buttons/createDeleteButton/index.js";
import createUpdateButton from "./Buttons/createUpdateButton.js";
import createCancelButton from "./Buttons/createCancelButton/index.js";
import createShowButton from "./Buttons/createShowButton/index.js";

import hookEvents from "./events/index.js";
import render from "./render.js";

class KsTableBodyOptionsCell extends HTMLElement {
    connectedCallback() {
        const localOptions = getOptions({ inElement: this });

        applyStyle({ inElement: this });
        // console.log("localOptions : ", localOptions);

        const editBtn = localOptions.showEdit ? createEditButton() : null;
        const deleteBtn = localOptions.showDelete ? createDeleteButton(localOptions) : null;
        const showBtn = localOptions.showDelete ? createShowButton(localOptions) : null;
        const updateBtn = createUpdateButton();
        const cancelBtn = createCancelButton();

        hookEvents({
            editBtn,
            deleteBtn,
            updateBtn,
            cancelBtn,
            showBtn,
            options: localOptions,
            inElement: this
        });

        render({
            inElement: this,
            editBtn,
            showBtn,
            deleteBtn,
            updateBtn,
            cancelBtn
        });
    }
}

if (!customElements.get("ks-table-body-options-cell")) {
    customElements.define("ks-table-body-options-cell", KsTableBodyOptionsCell);
}

export { KsTableBodyOptionsCell };
