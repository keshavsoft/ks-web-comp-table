const render = ({ inElement, editBtn, deleteBtn, updateBtn, cancelBtn }) => {
    if (editBtn) inElement.appendChild(editBtn);
    if (deleteBtn) inElement.appendChild(deleteBtn);
    if (updateBtn) inElement.appendChild(updateBtn);
    if (cancelBtn) inElement.appendChild(cancelBtn);
};

export default render;
