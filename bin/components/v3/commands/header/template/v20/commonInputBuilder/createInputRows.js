import { createInputRow } from "./createInputRow.js";

const createInputRows = ({ inColumnsConfig, inDefaultRow, inDataStore, inputs,
    rowClass
}) => {

    const fragment = document.createDocumentFragment();

    if (window.ksShowLogTree.components.vertical.htmlForm) console.log("window.ksShowLogTree.components.vertical.htmlForm - createInputRow : ", inColumnsConfig, inDefaultRow, inDataStore, inputs);

    inColumnsConfig.forEach(col => {
        if (col.isConsider) {
            const row = createInputRow({
                inCol: col,
                inDefaultRow,
                inDataStore,
                inputs: inputs,
                inEnterAsTab: col?.verticalConfig?.enterAsTab,
                rowClass: col?.uiClasses?.form?.rowClass || rowClass
            });

            if (row) {
                fragment.appendChild(row);
            };

        };
    });
    return fragment;
};

export default createInputRows;
