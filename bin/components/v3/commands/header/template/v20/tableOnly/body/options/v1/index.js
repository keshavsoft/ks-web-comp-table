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
        const closestBody = this.closest("tbody");

        const localOptions = getOptions({
            inElement: this,
            inClosestBody: closestBody
        });

        applyStyle({ inElement: this });

        const editBtn = localOptions.showEdit ? createEditButton() : null;
        const deleteBtn = localOptions.showDelete ? createDeleteButton(localOptions) : null;
        const showBtn = localOptions.showShow ? createShowButton(localOptions) : null;
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

if (!customElements.get("ks-table-only-body-options-cell")) {
    customElements.define("ks-table-only-body-options-cell", KsTableBodyOptionsCell);
};

window.ks = window.ks || {};
window.ks.components = window.ks.components || {};
window.ks.components.tableOnly = window.ks.components.tableOnly || {};
window.ks.components.tableOnly.body = window.ks.components.tableOnly.body || {};
window.ks.components.tableOnly.body.options = window.ks.components.tableOnly.body.options || {};
window.ks.components.tableOnly.body.options.version = "v1";
// window.ks.components.tableOnly.body.options.defaults = defaults;

export { KsTableBodyOptionsCell };
