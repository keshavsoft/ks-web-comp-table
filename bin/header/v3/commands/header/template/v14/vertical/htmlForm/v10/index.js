import renderForm from "./render/start.js";
import { defaultOptionsSingleLine, defaultOptionsTwoLines, defaultOptionsInputInline, defaultOptionsInputsStacked } from "./defaultOptions.js";

const layouts = {
    singleLine: defaultOptionsSingleLine,
    twoLines: defaultOptionsTwoLines,
    inputsInline: defaultOptionsInputInline,
    inputInline: defaultOptionsInputInline,
    inputsStacked: defaultOptionsInputsStacked,
    labelAbove: defaultOptionsInputsStacked
};

class KsHtmlForm extends HTMLElement {
    static layouts = layouts;

    get layouts() {
        return this.constructor.layouts;
    }

    init(options) {
        const layoutType = options?.layoutType || options?.inVerticalOptions?.layoutType;
        const layoutPreset = layouts[layoutType] || layouts.inputsInline;

        // Merge uiClasses recursively to allow override and fallbacks
        const mergedUiClasses = {
            ...layoutPreset.uiClasses,
            ...options?.uiClasses,
            form: {
                ...layoutPreset.uiClasses?.form,
                ...options?.uiClasses?.form,
                fieldset: {
                    ...layoutPreset.uiClasses?.form?.fieldset,
                    ...options?.uiClasses?.form?.fieldset
                },
                buttonRow: {
                    ...layoutPreset.uiClasses?.form?.buttonRow,
                    ...options?.uiClasses?.form?.buttonRow
                }
            }
        };

        this.options = {
            ...layoutPreset,
            ...options,
            uiClasses: mergedUiClasses
        };
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

        renderForm({
            element: this,
            options: this.options
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
export { KsHtmlForm, layouts };
