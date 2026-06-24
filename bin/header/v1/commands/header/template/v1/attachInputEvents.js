import attachKeyDownEvent from "./AttachKeyDownEvent/v2/start.js";
import attachChangeEvent from "./attachChangeEvent.js";

const attachInputEvents = ({
    inInput,
    inOnKeyDown,
    inOnKeyDownType,
    inOnChangeFunc,
    inOnChangeType
}) => {
    attachKeyDownEvent({
        input: inInput,
        inOnKeyDown,
        inOnKeyDownType
    });

    if (!inOnChangeType) return;

    attachChangeEvent({
        input: inInput,
        onChangeFunc: inOnChangeFunc,
        onChangeType: inOnChangeType
    });
};

export default attachInputEvents;
