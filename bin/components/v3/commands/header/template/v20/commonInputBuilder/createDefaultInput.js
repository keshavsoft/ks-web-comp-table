const returnDefault = ({ inCol, inDefaultRow }) => {
    if ("defaultvalue" in inCol) {
        return inCol.defaultvalue
    };

    const defaultValue = inCol in inDefaultRow ? inDefaultRow[inCol] : "";
    return defaultValue;
};

export const createDefaultInput = ({ inCol, inDefaultRow, inDataStore,
    inDataListFillName, inType, inEnterAsTab, rowClass }) => {

    const col = inCol.columnName;
    // const row = document.createElement("ks-input");
    const row = document.createElement("ks-input-with-enter");
    // console.log("bbbbbbbbbb : ", inCol?.uiClasses?.form?.rowClass);

    // const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    const defaultValue = returnDefault({ inCol, inDefaultRow });

    // if (window.ksShowLogTree.components.vertical.htmlForm) console.log("window.ksShowLogTree.components.vertical.htmlForm - createDefaultInput : ", inDefaultRow, defaultValue, row, defaultValue);

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("source", col);
    row.setAttribute("tabIndex", inCol.tabIndex);

    if (inCol?.uiClasses?.form.labelClass) row.setAttribute("ksLabelClass", inCol?.uiClasses?.form?.labelClass);
    if (rowClass) row.setAttribute("ksRowClass", rowClass);

    // row.setAttribute("ksRowClass", inCol?.uiClasses?.form?.rowClass || rowClass);

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

    if (inCol?.hide) {
        row.setAttribute("style", "display:none");
    };

    return row;
};
