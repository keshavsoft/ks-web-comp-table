import executeKeyDownType from "./ExecuteKeyDownType/v6/start.js";

const startFunc = (input) => {
    input.addEventListener("keydown", (event) => {
        const currentTarget = event.currentTarget;

        const inputElement = currentTarget.querySelector("input");

        if (event.key === "Enter") {
            executeKeyDownType({
                currentInput: inputElement,
                inDefaultRow: {},
                closestTagIsTr: true
            });
        };

        if (event.key !== "Enter") return;

        // event.preventDefault();
    });
};

export default startFunc;