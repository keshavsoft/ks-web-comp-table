import fillInputsFromObject from "./fillInputsFromObject.js";
import findDataListRecord from "./findDataListRecord.js";

const applyDataListSelection = ({
    dataListSource,
    dataStore,
    inputValue,
    currentInput
}) => {
    const matchedRecord = findDataListRecord({
        inputValue,
        dataStore,
        dataListSource
    });
    // console.log("v : ", currentInput, matchedRecord);

    if (!matchedRecord) return;

    const verticalForm = currentInput.closest("tr");

    if (!verticalForm) return;

    fillInputsFromObject({
        container: verticalForm,
        sourceObject: matchedRecord,
        skipInput: currentInput
    });
};

export default applyDataListSelection;
