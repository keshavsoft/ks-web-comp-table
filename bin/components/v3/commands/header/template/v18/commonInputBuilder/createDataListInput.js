export const createDataListInput = ({ inCol, inDefaultRow, inDataStore }) => {
    // console.log("inCol, inDefaultRow, inDataStore : ", inCol, inDefaultRow, inDataStore);
    // debugger
    const col = inCol.columnName;
    // const row = document.createElement("ks-datalist-input");
    const row = document.createElement("ks-table-footer-input-dl");

    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("list", `${col}List`);
    row.setAttribute("source", col);
    row.setAttribute("ksInValue", defaultValue);
    row.setAttribute("ksDataListSource", inCol.dataListSource);

    row.dataStore = inDataStore;

    return row;
};
