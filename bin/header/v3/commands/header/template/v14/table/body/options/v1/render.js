const render = ({ inElement, editBtn, deleteBtn }) => {
    if (editBtn) inElement.appendChild(editBtn);
    if (deleteBtn) inElement.appendChild(deleteBtn);
};

export default render;
