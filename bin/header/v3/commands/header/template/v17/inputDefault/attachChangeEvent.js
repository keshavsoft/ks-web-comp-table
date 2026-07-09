import applyDataListSelection from "./DataList/applyDataListSelection.js";

const attachChangeEvent = ({
    input, onChangeType,
    onChangeFunc,
    dataListSource,
    inDataStore
}) => {
    // if (!onChangeFunc) return;

    input.addEventListener(
        "change",
        (event) => {
            const localCurrentTarget =
                event.currentTarget;
            // console.log("localCurrentTarget : ", localCurrentTarget);
            const value = localCurrentTarget.value;
            onChangeFunc?.(value);

            // console.log("localCurrentTarget : ", localCurrlocalCurrentTarget.datasetentTarget.dataset);

            applyDataListSelection({
                dataListSource: localCurrentTarget.dataset.dataListSource,
                dataStore: inDataStore,
                inputValue: value,
                currentInput: input
            });

            // onChangeFunc({
            //     inCurrentTarget: localCurrentTarget,
            //     inChangeType: onChangeType
            // });
        }
    );
};

export default attachChangeEvent;