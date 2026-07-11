import classFromInputCore from "../inputCore/index.js";

import applyDataList from "./applyDataList.js";

import attachInputEvents from "./attachInputEvents.js";
import renderInput from "./renderInput.js";

class KsTableFooterInputDl extends classFromInputCore {
    connectedCallback() {
        super.connectedCallback();

        const localInput = this.querySelector("input");
        const localOptions = this.localOptions;

        applyDataList({
            inInput: localInput,
            inName: localOptions.inName,
            inDataListSource: localOptions.inDataListSource
        });

        attachInputEvents({
            inInput: localInput,
            inOnKeyDown: localOptions.inOnKeyDown,
            inOnKeyDownType: localOptions.inOnKeyDownType,
            inOnChangeFunc: localOptions.inOnChangeFunc,
            inOnChangeType: localOptions.inOnChangeType,
            inDataStore: localOptions.inDataStore
        });

        renderInput({
            inElement: this,
            inInput: localInput
        });

    }
}

if (!customElements.get("ks-table-footer-input-dl")) {
    customElements.define("ks-table-footer-input-dl", KsTableFooterInputDl);
};

console.log("KsTableFooterInputDl component loaded to DOM");

export default KsTableFooterInputDl;
