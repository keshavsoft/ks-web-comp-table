/**
 * Toggles visibilities of row option buttons back to the default display state.
 *
 * @param {HTMLTableCellElement} actionsCell - The options actions cell containing the buttons.
 */
const toggleButtons = ({ actionsCell }) => {
    const editBtn = actionsCell.querySelector("button.editButton");
    const deleteBtn = actionsCell.querySelector("button.deleteButton");
    const updateBtn = actionsCell.querySelector("button.updateButton");
    const cancelBtn = actionsCell.querySelector("button.cancelButton");

    if (updateBtn) updateBtn.style.display = "none";
    if (cancelBtn) cancelBtn.style.display = "none";
    if (editBtn) editBtn.style.display = "";
    if (deleteBtn) deleteBtn.style.display = "";
};

export default toggleButtons;
