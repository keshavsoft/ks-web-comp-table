const cancelClick = ({ event }) => {
    const cancelBtn = event.currentTarget;
    const actionsCell = cancelBtn.parentElement;
    const closestTr = cancelBtn.closest("tr");
    if (!closestTr || !actionsCell) return;

    const editBtn = actionsCell.querySelector("button.editButton");
    const deleteBtn = actionsCell.querySelector("button.deleteButton");
    const updateBtn = actionsCell.querySelector("button.updateButton");

    const tds = closestTr.querySelectorAll("td");

    // Restore from td.dataset.oldValue
    tds.forEach((td, i) => {
        if (i === tds.length - 1) return;
        const oldValue = td.dataset.oldValue || "";
        td.replaceChildren(document.createTextNode(oldValue));
    });

    // Toggle visibilities
    cancelBtn.style.display = "none";
    if (updateBtn) updateBtn.style.display = "none";
    if (editBtn) editBtn.style.display = "";
    if (deleteBtn) deleteBtn.style.display = "";
};

export default cancelClick;
