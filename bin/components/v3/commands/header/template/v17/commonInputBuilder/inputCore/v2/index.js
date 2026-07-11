import getInputOptions, { defaultOptions } from "./getInputOptions.js";
import applyParentCellStyle from "./applyParentCellStyle.js";
import createTextInput from "./createTextInput.js";
import applyDataList from "./applyDataList.js";
import applyDefaultValue from "./applyDefaultValue.js";

import renderInput from "./renderInput.js";
import attachEnterKeyEvent from "./attachEnterKeyEvent.js";

class KsTableFooterInputCore extends HTMLElement {
    static defaults = defaultOptions;

    get defaults() {
        return this.constructor.defaults;
    }

    get options() {
        return this.localOptions;
    }

    connectedCallback() {
        const localOptions =
            getInputOptions({
                inElement: this
            });

        this.localOptions = localOptions;

        applyParentCellStyle({
            inElement: this,
            inRightAlign: localOptions.inRightAlign,
            inWidth: localOptions.inWidth
        });
        // console.log("localOptions : ", localOptions);

        const localInput = createTextInput(localOptions);

        applyDefaultValue({
            inInput: localInput,
            type: localOptions.type, inValue: localOptions.value
        });

        applyDataList({
            inInput: localInput,
            inDataListFillName: localOptions.inDataListFillName
        });
        // console.log("localOptions.enterAsTab : ", localOptions.enterAsTab);

        if (localOptions.enterAsTab) {
            attachEnterKeyEvent(localInput);
        };

        this.renderInput({
            inInput: localInput
        });
    }

    renderInput({ inInput }) {
        renderInput({
            inElement: this,
            inInput: inInput
        });
    }
}

if (!customElements.get("ks-table-footer-input-core")) {
    customElements.define("ks-table-footer-input-core", KsTableFooterInputCore);
};

export { defaultOptions };
export default KsTableFooterInputCore;

