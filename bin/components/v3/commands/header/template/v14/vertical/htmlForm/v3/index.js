import { renderForm } from "./render.js";

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

        this.inputs = {};

        renderForm({
            element: this,
            options: this.options,
            inputs: this.inputs
        });
    }
}

if (!customElements.get("ks-html-form")) {
    customElements.define("ks-html-form", KsHtmlForm);
}

export default KsHtmlForm;
export { KsHtmlForm };
