import { createInputRow } from "../createInputRow.js";

const appendInputRows = ({ fieldset, inSearchableColumnsConfig, inDefaultRow, inDataStore, inputs }) => {
    inSearchableColumnsConfig.forEach(col => {
        const row = createInputRow({
            inCol: col,
            inDefaultRow,
            inDataStore,
            inputs: inputs
        });
        if (row) {
            fieldset.appendChild(row);
        }
    });
};

export default appendInputRows;
