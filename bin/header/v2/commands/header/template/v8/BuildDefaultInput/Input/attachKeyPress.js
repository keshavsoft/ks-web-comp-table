import executeKeyDownType from "./ExecuteKeyDownType/v1/start.js";

const attachDataListChange = ({
    input,
    dataListSource,
    dataStore,
    onChange, inOnKeyDownType
}) => {
    input.addEventListener("keydown", event => {

        const value = event.target.value;

        if (event.key === "Enter") {
            executeKeyDownType({ currentInput: input, inOnKeyDownType });
        };
    });
};

export default attachDataListChange;
