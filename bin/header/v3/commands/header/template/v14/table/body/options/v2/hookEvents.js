import { replaceCellWithFooterInput } from "./createEditButton/start.js";

const hookEvents = ({ editBtn, deleteBtn, updateBtn, cancelBtn, options, inElement }) => {
    // 1. Edit Click Handler
    if (editBtn) {
        editBtn.onclick = () => {
            const actionsCell = editBtn.parentElement;
            const closestTr = editBtn.closest("tr");
            const closestTable = closestTr.closest("table");
            if (!closestTr || !closestTable || !actionsCell) return;

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

            options.onEditFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
        };
    }

    // 2. Cancel Click Handler
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            const actionsCell = cancelBtn.parentElement;
            const closestTr = cancelBtn.closest("tr");
            if (!closestTr || !actionsCell) return;

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
    }

    // 3. Update Click Handler
    if (updateBtn) {
        updateBtn.onclick = () => {
            const actionsCell = updateBtn.parentElement;
            const closestTr = updateBtn.closest("tr");
            if (!closestTr || !actionsCell) return;

            const tds = closestTr.querySelectorAll("td");

            // Gather values and commit to static text
            tds.forEach((td, i) => {
                if (i === tds.length - 1) return;

                const input = td.querySelector("ks-table-footer-input, ks-input, input");
                if (input) {
                    const nativeInput = input.querySelector("input") || input;
                    const newVal = nativeInput.value || "";
                    td.replaceChildren(document.createTextNode(newVal));
                }
            });

            // Toggle visibilities
            updateBtn.style.display = "none";
            if (cancelBtn) cancelBtn.style.display = "none";
            if (editBtn) editBtn.style.display = "";
            if (deleteBtn) deleteBtn.style.display = "";
        };
    }

    // 4. Delete Click Handler
    if (deleteBtn) {
        deleteBtn.onclick = () => {
            options.onDeleteFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
        };
    }
};

export default hookEvents;
