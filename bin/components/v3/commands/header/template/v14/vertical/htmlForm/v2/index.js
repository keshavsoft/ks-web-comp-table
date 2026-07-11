import { createInputRow } from "./createInputRow.js";
import { appendSaveButton } from "./appendSaveButton.js";

class KsHtmlForm extends HTMLElement {
    init(options) {
        this.options = options;
        this.render();
    }

    connectedCallback() {
        if (this.options && !this.dataset.rendered) {
            this.render();
        }
    }

    render() {
        this.dataset.rendered = "true";
        this.innerHTML = "";

        const {
            showSaveButton = false,
            inDefaultRow = {},
            onSubmit,
            uiClasses = {},
            inIsDisabled,
            inVisibleColumnsConfig = [],
            inGetDataLists,
            inServices,
            inConfig,
            inSearchableColumnsConfig = [],
            inShowButton,
            inDataStore
        } = this.options;

        const form = document.createElement("form");

        const fieldset = document.createElement("fieldset");
        fieldset.className = uiClasses.formClass || 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm';
        fieldset.disabled = inIsDisabled;

        form.appendChild(fieldset);

        this.inputs = {};

        inSearchableColumnsConfig.forEach(col => {
            const row = createInputRow({
                inCol: col,
                inDefaultRow,
                inDataStore,
                inputs: this.inputs
            });
            if (row) {
                fieldset.appendChild(row);
            }
        });

        if (showSaveButton) {
            appendSaveButton({
                form,
                inServices,
                inConfig
            });
        }

        this.appendChild(form);
    }
}

if (!customElements.get("ks-html-form")) {
    customElements.define("ks-html-form", KsHtmlForm);
}

export default KsHtmlForm;
export { KsHtmlForm };
