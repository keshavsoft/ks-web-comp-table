// import KsInput from "../commonInputBuilder/inputCore/v3/index.js";
import KsInput from "../../../commonInputBuilder/inputCore/v3/index.js";

import attachEnterKeyEvent from "./attachEnterKeyEvent.js";

import createLabel from "./Label/createLabel.js";
import createWrapper from "./createWrapper.js";

class KsTableFooterInputCore extends KsInput {
    connectedCallback() {
        super.connectedCallback();

        attachEnterKeyEvent(this);
    }

    renderInput({ inInput }) {
        const inLabel = this.getAttribute("label") || this.ksLabel || "";
        const inLabelClass = this.getAttribute("ksLabelClass") || this.ksLabelClass || "";
        const inRowClass = this.getAttribute("ksRowClass") || this.ksRowClass || "";

        const wrapper = createWrapper({ inRowClass });
        const label = createLabel({ labelText: inLabel, inLabelClass });
        // console.log("inInput : ", inInput);

        wrapper.append(label, inInput);

        this.replaceChildren(wrapper);
    }
};

if (!customElements.get("ks-input-with-enter")) {
    customElements.define("ks-input-with-enter", KsTableFooterInputCore);
};

window.ks = window.ks || {};
window.ks.components = window.ks.components || {};
window.ks.components.inputs = window.ks.components.inputs || {};
window.ks.components.inputs.withEnter = window.ks.components.inputs.withEnter || {};
window.ks.components.inputs.withEnter.version = "v2";

export default KsTableFooterInputCore;
