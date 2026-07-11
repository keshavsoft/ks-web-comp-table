import setContent from "./setContent.js";
import applyStyle from "./applyStyle.js";

const createDeleteButton = ({ deleteType, deleteIconSize }) => {
    const deleteBtn = document.createElement("button");

    setContent({
        inButton: deleteBtn,
        deleteType,
        deleteIconSize
    });

    applyStyle({ inButton: deleteBtn });

    return deleteBtn;
};

export default createDeleteButton;
