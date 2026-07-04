export const createDefaultInput = ({ inCol, inDefaultRow, inDataStore, inDataListFillName, inType }) => {
    const col = inCol.columnName;
    const row = document.createElement("ks-input");
    console.log("row : ", row);

    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("source", col);

    if (inType !== undefined) {
        row.setAttribute("type", inType);
    };

    if (defaultValue) {
        row.setAttribute("ksInValue", defaultValue);
    };

    if (inCol?.verticalConfig) {
        if ("allowOnChange" in inCol.verticalConfig) {
            row.setAttribute("ksAllowOnChange", inCol.verticalConfig.allowOnChange);
        }
        if ("onKeyDownType" in inCol.verticalConfig) {
            row.setAttribute("ksOnKeyDownType", inCol.verticalConfig.onKeyDownType);
        }
    }

    if (inDataListFillName) {
        row.setAttribute("ksDataListFillName", inDataListFillName);
    }

    row.dataStore = inDataStore;
    // inputs[col] = row;

    return row;
};
