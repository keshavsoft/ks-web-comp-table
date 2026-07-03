import renderForm from "./render/start.js";
import defaultOptions from "./defaultOptions.js";

class KsHtmlForm extends HTMLElement {
    static defaults = defaultOptions;

    get defaults() {
        return this.constructor.defaults;
    }

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

window.ks = window.ks || {};
window.ks.components = window.ks.components || {};
window.ks.components.htmlForm = KsHtmlForm;

export default KsHtmlForm;
export { KsHtmlForm, defaultOptions };
