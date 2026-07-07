import { createInputRow } from "./createInputRow.js";

const createInputRows = ({ inColumnsConfig, inDefaultRow, inDataStore, inputs }) => {
    const fragment = document.createDocumentFragment();

    // console.log("createInputRows ---------: ", inColumnsConfig, inDefaultRow, inDataStore, inputs);

    if (window.ksShowLogTree.components.vertical.htmlForm) console.log("window.ksShowLogTree.components.vertical.htmlForm - createInputRow : ", inColumnsConfig, inDefaultRow, inDataStore, inputs);

    inColumnsConfig.forEach(col => {

        if (col.isConsider) {


            const row = createInputRow({
                inCol: col,
                inDefaultRow,
                inDataStore,
                inputs: inputs
            });

            if (row) {
                fragment.appendChild(row);
            };

        };
    });
    return fragment;
};

export default createInputRows;
