export const createDataListInput = ({ inCol, inDefaultRow, inDataStore,
    inEnterAsTab
}) => {

    // console.log("inCol, inDefaultRow, inDataStore : ", inCol, inDefaultRow, inDataStore);
    // debugger
    const col = inCol.columnName;
    // const row = document.createElement("ks-datalist-input");
    // const row = document.createElement("ks-table-footer-input-dl");
    const row = document.createElement("ks-input-with-enter-dl");

    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("list", `${col}List`);
    row.setAttribute("source", col);
    row.setAttribute("ksInValue", defaultValue);
    row.setAttribute("ksDataListSource", inCol.dataListSource);

    if (inEnterAsTab) {
        row.setAttribute("enterAsTab", inEnterAsTab);
    };

    row.dataStore = inDataStore;

    return row;
};
