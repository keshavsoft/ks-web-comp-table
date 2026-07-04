import setContent from "./setContent.js";
import applyStyle from "./applyStyle.js";

const createEditButton = () => {
    const editBtn = document.createElement("button");

    setContent({ inButton: editBtn });
    applyStyle({ inButton: editBtn });

    return editBtn;
};

export default createEditButton;
