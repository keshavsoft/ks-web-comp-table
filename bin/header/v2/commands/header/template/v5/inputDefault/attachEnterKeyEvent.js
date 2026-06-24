import executeKeyDownType from "./ExecuteKeyDownType/v1/start.js";

const startFunc = (input) => {
    input.addEventListener("keydown", (event) => {
        const currentTarget = event.currentTarget;

        const inputElement = currentTarget.querySelector("input");
        const ksOnKeyDownType = currentTarget.getAttribute("ksOnKeyDownType");

        if (event.key === "Enter") {
            // console.log("ooooooo : ", event.key);
            executeKeyDownType({
                currentInput: inputElement,
                inOnKeyDownType: ksOnKeyDownType,
                inDefaultRow: {},
                closestTagIsTr: true
            });
        };

        if (event.key !== "Enter") return;

        // event.preventDefault();
    });
};

export default startFunc;