import focusNextInput from "./focusNextInput.js";

import executeKeyDownType from "./ExecuteKeyDownType/v2/start.js";

const attachKeyDownEvent = ({
    input,
    inOnKeyDown,
    inOnKeyDownType,
    inDefaultRow
}) => {
    console.log("aaaaaaaaaaa : ", inOnKeyDown);

    if (!inOnKeyDown) return;

    input.addEventListener(
        "keydown",
        (event) => {
            console.log("bbbbbbb : ", event);

            if (event.key !== "Enter") return;
            // console.log("aaaaaaaaaaa : ", event.isTrusted);

            const currentInput = event.currentTarget;

            console.log("aaaaaaaaaaa : ", currentInput);

            executeKeyDownType({
                currentInput,
                inOnKeyDownType,
                inDefaultRow
            });

            // if (event.isTrusted) {
            //     focusNextInput({
            //         currentInput
            //     });
            // };

        }
    );
};

export default attachKeyDownEvent;