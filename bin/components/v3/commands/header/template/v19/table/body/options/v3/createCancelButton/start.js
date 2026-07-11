/**
 * Click handler for the Cancel button.
 * Reads the input values and restores them as static text,
 * then toggles the button visibilities.
 */
const startFunc = ({ inCurrentTarget }) => {
    const cancelBtn = inCurrentTarget;
    const actionsCell = cancelBtn.parentElement;
    const closestTr = cancelBtn.closest("tr");

    if (!closestTr || !actionsCell) return;

    const tds = closestTr.querySelectorAll("td");
    const buttons = Array.from(actionsCell.querySelectorAll("button"));
    const editBtn = buttons.find(btn => btn.classList.contains("editButton") || btn.textContent.includes("Edit"));
    const deleteBtn = buttons.find(btn => btn.classList.contains("deleteButton") || btn.textContent.includes("Delete"));
    const updateBtn = buttons.find(btn => btn.classList.contains("updateButton") || btn.textContent.includes("Update"));

    // Revert cells to static text based on current input values in DOM
    tds.forEach((td, i) => {
        if (i === tds.length - 1) return; // Skip actions cell
        const oldValue = td.dataset.oldValue;

        td.replaceChildren(document.createTextNode(oldValue));
    });

    // Toggle button visibilities
    cancelBtn.style.display = "none";
    if (updateBtn) updateBtn.style.display = "none";
    if (editBtn) editBtn.style.display = "";
    if (deleteBtn) deleteBtn.style.display = "";
};

export default startFunc;
