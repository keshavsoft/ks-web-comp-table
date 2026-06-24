import createInput from "./Input/createInput.js";
import createLabel from "./Label/createLabel.js";
import createWrapper from "./createWrapper.js";

import attachCurrentRowFocus from "./Input/attachCurrentRowFocus.js";
import attachKeyPress from "./Input/attachKeyPress.js";

export const startFunc = ({
    inLabel = "", inInputClass,
    inName = "", inType,
    inValue = "", inOnKeyDownType,
    inDataListFillName, inAllowOnChange,
    inRowClass, inLabelClass
} = {}) => {
    const wrapper = createWrapper({ inRowClass });
    const label = createLabel({ labelText: inLabel, inLabelClass });

    const input = createInput({
        name: inName,
        value: inValue,
        inDataListFillName, inType,
        inInputClass
    });

    attachCurrentRowFocus({ input });

    if (inAllowOnChange) {
        attachKeyPress({ input, inOnKeyDownType })
    };

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};

export default startFunc;
