import ksInputWithEnter from "../../v2/index.js";

class KsTableFooterInputCore extends ksInputWithEnter {
    renderInput({ inInput }) {
        // Intercept here to move/add HTML attributes to the inner inInput element

        super.renderInput({ inInput });
    }
};

if (!customElements.get("ks-input-with-enter-dl")) {
    customElements.define("ks-input-with-enter-dl", KsTableFooterInputCore);
};

window.ks = window.ks || {};
window.ks.components = window.ks.components || {};
window.ks.components.inputs = window.ks.components.inputs || {};
window.ks.components.inputs.withEnter = window.ks.components.inputs.withEnter || {};
window.ks.components.inputs.withEnter.dataListAlso = window.ks.components.inputs.withEnter.dataListAlso || {};
window.ks.components.inputs.withEnter.dataListAlso.version = "v1";

export default KsTableFooterInputCore;

