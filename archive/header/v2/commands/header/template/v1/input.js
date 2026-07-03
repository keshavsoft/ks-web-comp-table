import getInputOptions from "./getInputOptions.js";
import applyParentCellStyle from "./applyParentCellStyle.js";
import createTextInput from "./createTextInput.js";
import applyDataList from "./applyDataList.js";
import attachInputEvents from "./attachInputEvents.js";
import renderInput from "./renderInput.js";

class KsTableFooterInput extends HTMLElement {
    connectedCallback() {
        const localOptions =
            getInputOptions({
                inElement: this
            });

        applyParentCellStyle({
            inElement: this,
            inRightAlign: localOptions.inRightAlign,
            inWidth: localOptions.inWidth
        });

        const localInput =
            createTextInput(localOptions);
        // console.log("localInput : ", localInput, localOptions);

        applyDataList({
            inInput: localInput,
            inName: localOptions.inName,
            inShowDataList: localOptions.inShowDataList,
            inColumnsConfig: localOptions.inColumnsConfig
        });

        attachInputEvents({
            inInput: localInput,
            inOnKeyDown: localOptions.inOnKeyDown,
            inOnKeyDownType: localOptions.inOnKeyDownType,
            inOnChangeFunc: localOptions.inOnChangeFunc,
            inOnChangeType: localOptions.inOnChangeType
        });

        renderInput({
            inElement: this,
            inInput: localInput
        });
    }
}

if (!customElements.get("ks-table-footer-input")) {
    customElements.define("ks-table-footer-input", KsTableFooterInput);
}

export default KsTableFooterInput;
