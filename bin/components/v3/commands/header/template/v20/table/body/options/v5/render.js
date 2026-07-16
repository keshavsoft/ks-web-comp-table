const render = ({ inElement, editBtn, deleteBtn, updateBtn, cancelBtn,
    showBtn
}) => {
    if (editBtn) inElement.appendChild(editBtn);
    if (deleteBtn) inElement.appendChild(deleteBtn);

    if (updateBtn) inElement.appendChild(updateBtn);
    if (cancelBtn) inElement.appendChild(cancelBtn);

    if (showBtn) inElement.appendChild(showBtn);
};

export default render;
