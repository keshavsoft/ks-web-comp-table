import { replaceCellWithFooterInput } from "../createEditButton/start.js";

const editClick = ({ event, options }) => {
    const editBtn = event.currentTarget;
    const actionsCell = editBtn.parentElement;
    const closestTr = editBtn.closest("tr");
    const closestTable = closestTr.closest("table");
    if (!closestTr || !closestTable || !actionsCell) return;

    const deleteBtn = actionsCell.querySelector("button.deleteButton");
    const updateBtn = actionsCell.querySelector("button.updateButton");
    const cancelBtn = actionsCell.querySelector("button.cancelButton");

    // Toggle visibilities
    editBtn.style.display = "none";
    if (deleteBtn) deleteBtn.style.display = "none";
    if (updateBtn) updateBtn.style.display = "";
    if (cancelBtn) cancelBtn.style.display = "";

    const tds = closestTr.querySelectorAll("td");
    const footerTds = closestTable.querySelectorAll("tfoot tr td");

    // Backup cell content in DOM dataset
    tds.forEach((td, i) => {
        if (i === tds.length - 1) return;
        td.dataset.oldValue = td.textContent;
        replaceCellWithFooterInput(td, footerTds[i], options.item);
    });

    // options.onEditFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
};

export default editClick;
