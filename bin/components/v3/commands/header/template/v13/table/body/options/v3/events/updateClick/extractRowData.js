/**
 * Extracts input values inside row cells into a data object.
 *
 * @param {HTMLTableRowElement} closestTr - The target row element.
 * @param {Object} options - Component options containing initial row item.
 * @returns {Object} Gathered key-value pairs representing the edited row data.
 */
const extractRowData = ({ closestTr, options }) => {
    const tds = closestTr.querySelectorAll("td");
    const updatedItem = { pk: closestTr.dataset.pk || options.item?.pk };

    tds.forEach((td, i) => {
        if (i === tds.length - 1) return;

        const input = td.querySelector("input");
        if (input && input.name) {
            updatedItem[input.name] = input.value;
        }
    });

    return updatedItem;
};

export default extractRowData;
