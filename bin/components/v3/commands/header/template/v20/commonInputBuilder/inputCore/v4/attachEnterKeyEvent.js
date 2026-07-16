import handleEnterKey from "./attachEnterKeyEvent/index.js";

const startFunc = (input) => {
    input.addEventListener("keydown", handleEnterKey);
};

export default startFunc;
