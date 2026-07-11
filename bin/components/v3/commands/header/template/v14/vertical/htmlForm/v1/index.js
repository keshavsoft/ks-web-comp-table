class KsHtmlForm extends HTMLElement {
    init(options) {
        this.options = options;
        this.render();
    }

    connectedCallback() {
        if (this.options && !this.dataset.rendered) {
            this.render();
        }
    }

    render() {
        this.dataset.rendered = "true";
        this.innerHTML = "";

        const {
            showSaveButton = false,
            inDefaultRow = {},
            onSubmit,
            uiClasses = {},
            inIsDisabled,
            inVisibleColumnsConfig = [],
            inGetDataLists,
            inServices,
            inConfig,
            inSearchableColumnsConfig = [],
            inShowButton,
            inDataStore
        } = this.options;

        const form = document.createElement("form");

        const fieldset = document.createElement("fieldset");
        fieldset.className = uiClasses.formClass || 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm';
        fieldset.disabled = inIsDisabled;

        form.appendChild(fieldset);

        this.inputs = {};

        inSearchableColumnsConfig.forEach(col => {
            const row = this.createInputRow(col, inDefaultRow, inDataStore);
            if (row) {
                fieldset.appendChild(row);
            }
        });

        if (showSaveButton) {
            const button = document.createElement("ks-button");

            button.onClick = async (data) => {
                const fromService = await inServices.actionsFetchOnly.create({
                    inEndPoint: inConfig.endPoints.create,
                    payload: data
                });

                inConfig.callbacks.vertical.onSuccess(fromService);
            };

            form.appendChild(button);
        }

        this.appendChild(form);
    }

    createInputRow(inCol, inDefaultRow, inDataStore) {
        const col = inCol.columnName;
        const dataListFillName = inCol.dataListFillName;

        let row;

        if ("verticalConfig" in inCol) {
            if ("dataListSource" in inCol) {
                row = this.createDataListInput(inCol, inDefaultRow, inDataStore);
            } else {
                row = this.createDefaultInput({
                    inCol,
                    inDefaultRow,
                    inDataStore,
                    inDataListFillName: dataListFillName,
                    inType: "type" in inCol ? inCol.type : ""
                });
            }
        } else {
            switch (col) {
                case "LedgerName":
                    row = this.createDataListInput(inCol, inDefaultRow, inDataStore);
                    break;
                case "InvoiceDate":
                    row = document.createElement("ks-input");
                    row.setAttribute("label", "InvoiceDate");
                    row.setAttribute("name", "InvoiceDate");
                    row.setAttribute("type", "date");
                    this.inputs[col] = row;
                    break;
                default:
                    row = this.createDefaultInput({ inCol, inDefaultRow, inDataStore });
                    break;
            }
        }

        return row;
    }

    createDataListInput(inCol, inDefaultRow, inDataStore) {
        const col = inCol.columnName;
        const row = document.createElement("ks-datalist-input");

        const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";
        row.setAttribute("label", inCol.title);
        row.setAttribute("ksName", col);
        row.setAttribute("list", `${col}List`);
        row.setAttribute("source", col);
        row.setAttribute("ksInValue", defaultValue);
        row.setAttribute("ksDataListSource", inCol.dataListSource);

        row.dataStore = inDataStore;
        this.inputs[col] = row;

        return row;
    }

    createDefaultInput({ inCol, inDefaultRow, inDataStore, inDataListFillName, inType }) {
        const col = inCol.columnName;
        const row = document.createElement("ks-input");

        const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

        row.setAttribute("label", inCol.title);
        row.setAttribute("ksName", col);
        row.setAttribute("source", col);
        if (inType !== undefined) {
            row.setAttribute("type", inType);
        }

        if (defaultValue) {
            row.setAttribute("ksInValue", defaultValue);
        }

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
        this.inputs[col] = row;

        return row;
    }
}

if (!customElements.get("ks-html-form")) {
    customElements.define("ks-html-form", KsHtmlForm);
}

export default KsHtmlForm;
export { KsHtmlForm };
