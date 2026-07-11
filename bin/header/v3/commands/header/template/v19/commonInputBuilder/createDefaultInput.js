export const createDefaultInput = ({ inCol, inDefaultRow, inDataStore,
    inDataListFillName, inType, inEnterAsTab }) => {

    const col = inCol.columnName;
    // const row = document.createElement("ks-input");
    const row = document.createElement("ks-input-with-enter");

    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    if (window.ksShowLogTree.components.vertical.htmlForm) console.log("window.ksShowLogTree.components.vertical.htmlForm - createDefaultInput : ", inDefaultRow, defaultValue, row, defaultValue);

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("source", col);
    row.setAttribute("tabIndex", inCol.tabIndex);

    // console.log("bbbbbbbbbb : ", inEnterAsTab);

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
    };

    if (inEnterAsTab) {
        row.setAttribute("enterAsTab", inEnterAsTab);
    };

    row.dataStore = inDataStore;
    // inputs[col] = row;

    return row;
};
