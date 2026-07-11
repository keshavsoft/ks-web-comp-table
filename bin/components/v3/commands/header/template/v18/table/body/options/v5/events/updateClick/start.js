import extractRowData from "./extractRowData.js";
import revertRowToStaticText from "./revertRowToStaticText.js";
import toggleButtons from "./toggleButtons.js";

/**
 * Orchestrates the Update button click handling using decoupled helpers.
 */
const startFunc = ({ event, options }) => {
    const updateBtn = event.currentTarget;
    const actionsCell = updateBtn.parentElement;
    const closestTr = updateBtn.closest("tr");

    if (!closestTr || !actionsCell) return;

    // 1. Gather values from inputs in row cells to construct an object
    const updatedItem = extractRowData({ closestTr, options });
    // debugger;
    if (options.onUpdateFunc) {
        options.onUpdateFunc({ updatedItem });
    };

    // 2. Revert cells to static text displaying the new values
    revertRowToStaticText({ closestTr });

    // 3. Toggle button visibilities back to default
    toggleButtons({ actionsCell });
};

export default startFunc;
