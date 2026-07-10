import "./index.js";

const startFunc = ({ inOnSaveFunc }) => {
    const customEl = document.createElement("ks-save-button");
    customEl.onSave = inOnSaveFunc;

    return customEl;
};

export { startFunc };
