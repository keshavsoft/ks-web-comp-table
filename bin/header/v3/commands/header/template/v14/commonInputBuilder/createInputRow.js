import { createDataListInput } from "./createDataListInput.js";
import { createDefaultInput } from "./createDefaultInput.js";

export const createInputRow = ({ inCol, inDefaultRow, inDataStore }) => {
    const dataListFillName = inCol.dataListFillName;

    let row;

    if ("verticalConfig" in inCol) {
        if ("dataListSource" in inCol) {
            row = createDataListInput({ inCol, inDefaultRow, inDataStore });
        } else {
            row = createDefaultInput({
                inCol,
                inDefaultRow,
                inDataStore,
                inDataListFillName: dataListFillName,
                inType: "type" in inCol ? inCol.type : ""
            });
        }
    }

    return row;
};
