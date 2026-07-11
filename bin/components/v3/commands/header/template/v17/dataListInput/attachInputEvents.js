import attachKeyDownEvent from "./AttachKeyDownEvent/v2/start.js";
import attachChangeEvent from "./attachChangeEvent.js";

const attachInputEvents = ({
    inInput,
    inOnKeyDown,
    inOnKeyDownType,
    inOnChangeFunc,
    inOnChangeType, dataListSource,
    inDataStore
}) => {
    attachKeyDownEvent({
        input: inInput,
        inOnKeyDown,
        inOnKeyDownType
    });

    if (!inOnChangeType) return;
    // console.log("inDataStore : ", inDataStore);

    attachChangeEvent({
        input: inInput,
        onChangeFunc: inOnChangeFunc,
        onChangeType: inOnChangeType, dataListSource,
        inDataStore
    });
};

export default attachInputEvents;
