const createEditButton = ({ item, index, onEditFunc }) => {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "px-2 py-1 bg-yellow-400 text-white rounded";
    editBtn.onclick = () => onEditFunc?.({ item, index, presentPk: item?.pk });
    return editBtn;
};

export default createEditButton;
