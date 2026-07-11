import setContent from "./setContent.js";
import applyStyle from "./applyStyle.js";

const createCancelButton = () => {
    const cancelBtn = document.createElement("button");

    setContent({ inButton: cancelBtn });
    applyStyle({ inButton: cancelBtn });

    return cancelBtn;
};

export default createCancelButton;
