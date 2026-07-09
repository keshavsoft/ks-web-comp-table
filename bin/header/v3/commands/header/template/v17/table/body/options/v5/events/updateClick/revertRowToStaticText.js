/**
 * Restores all inputs in the row to standard static text nodes.
 *
 * @param {HTMLTableRowElement} closestTr - The target row element.
 */
const revertRowToStaticText = ({ closestTr }) => {
    const tds = closestTr.querySelectorAll("td");

    tds.forEach((td, i) => {
        if (i === tds.length - 1) return;

        const input = td.querySelector("input");
        if (input) {
            td.replaceChildren(document.createTextNode(input.value || ""));
        }
    });
};

export default revertRowToStaticText;
