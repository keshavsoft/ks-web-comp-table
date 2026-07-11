import setContent from "./setContent.js";
import applyStyle from "./applyStyle.js";
import attachClick from "./attachClick.js";

const createDeleteButton = ({ item, index, onDeleteFunc, deleteType, deleteIconSize }) => {
    const deleteBtn = document.createElement("button");

    setContent({
        inButton: deleteBtn,
        deleteType,
        deleteIconSize
    });

    applyStyle({ inButton: deleteBtn });

    attachClick({
        inButton: deleteBtn,
        item,
        index,
        onDeleteFunc
    });

    return deleteBtn;
};

export default createDeleteButton;
