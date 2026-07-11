import { createDataListInput } from "./createDataListInput.js";
import { createDefaultInput } from "./createDefaultInput.js";

export const createInputRow = ({ inCol, inDefaultRow, inDataStore, inputs }) => {
    const col = inCol.columnName;
    const dataListFillName = inCol.dataListFillName;

    let row;

    if ("verticalConfig" in inCol) {
        if ("dataListSource" in inCol) {
            row = createDataListInput({ inCol, inDefaultRow, inDataStore, inputs });
        } else {
            row = createDefaultInput({
                inCol,
                inDefaultRow,
                inDataStore,
                inDataListFillName: dataListFillName,
                inType: "type" in inCol ? inCol.type : "",
                inputs
            });
        }
    }

    return row;
};
