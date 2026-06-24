import getInputOptions, { defaultOptions } from "./getInputOptions.js";
import applyParentCellStyle from "./applyParentCellStyle.js";
import createTextInput from "./createTextInput.js";
import applyDataList from "./applyDataList.js";

import renderInput from "./renderInput.js";
import attachEnterKeyEvent from "./attachEnterKeyEvent.js";

class KsTableFooterInputCore extends HTMLElement {
    connectedCallback() {
        const localOptions =
            getInputOptions({
                inElement: this
            });

        console.log("------------------ : ", localOptions);

        this.localOptions = localOptions;

        applyParentCellStyle({
            inElement: this,
            inRightAlign: localOptions.inRightAlign,
            inWidth: localOptions.inWidth
        });

        const localInput =
            createTextInput(localOptions);
        // console.log("localInput------- : ", localInput, localOptions);

        applyDataList({
            inInput: localInput,
            inDataListFillName: localOptions.inDataListFillName
        });

        attachEnterKeyEvent(localInput);

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

export { defaultOptions };
export default KsTableFooterInputCore;

