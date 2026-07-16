// import classFromInputCore from "../inputCore/index.js";

import KsInput from "../commonInputBuilder/inputCore/v4/index.js";

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

if (!customElements.get("ks-input")) {
    customElements.define("ks-input", KsTableFooterInputCore);
};

console.log("KsTableFooterInputCore component loaded to DOM");

export default KsTableFooterInputCore;
