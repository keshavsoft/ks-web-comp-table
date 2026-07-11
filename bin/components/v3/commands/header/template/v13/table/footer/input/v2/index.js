import classFromInputCore from "../../../../commonInputBuilder/inputCore/v2/index.js";
import attachEnterKeyEvent from "./attachEnterKeyEvent.js";

class KsTableFooterInputCore extends classFromInputCore {
    connectedCallback() {
        super.connectedCallback();

        attachEnterKeyEvent(this);
    }
};

if (!customElements.get("ks-table-footer-input")) {
    customElements.define("ks-table-footer-input", KsTableFooterInputCore);
};

console.log("KsTableFooterInputCore component loaded to DOM");

export default KsTableFooterInputCore;
