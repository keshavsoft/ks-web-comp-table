import setContent from "./setContent.js";
import applyStyle from "./applyStyle.js";

const createDeleteButton = ({ deleteType, deleteIconSize }) => {
    const createdBtn = document.createElement("button");

    setContent({
        inButton: createdBtn,
        deleteType,
        deleteIconSize
    });

    applyStyle({ inButton: createdBtn });

    return createdBtn;
};

export default createDeleteButton;
