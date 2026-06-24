const defaultOptions = {
    inPlaceholder: "",
    inName: "",
    inClassName: "w-full border rounded px-2 py-1",
    inShowDataList: undefined,
    inColumnsConfig: [],
    inOnChangeFunc: undefined,
    inOnChangeType: undefined,
    inOnKeyDown: undefined,
    inOnKeyDownType: undefined,
    inRightAlign: undefined,
    inWidth: undefined,
    inputClassName: undefined,
    inDataListSource: "",
    inDataListFillName: "",
    inDataStore: undefined,
    inputClass: "",
    inType: "text"
};

const getInputOptions = ({ inElement }) => {
    const localName =
        inElement.ksName || defaultOptions.inName;

    // console.log("inElement : ", inElement);

    return {
        inPlaceholder: inElement.ksPlaceholder || defaultOptions.inPlaceholder,
        inName: localName,
        inClassName: inElement.ksClassName || defaultOptions.inClassName,
        inShowDataList: inElement.ksShowDataList,
        inColumnsConfig: inElement.ksInColumnsConfig || defaultOptions.inColumnsConfig,
        inOnChangeFunc: inElement.ksOnChangeFunc,
        inOnChangeType: inElement.ksOnChangeType,
        inOnKeyDown: inElement.ksOnKeyDown,
        inOnKeyDownType: inElement.ksOnKeyDownType,
        inRightAlign: inElement.ksRightAlign,
        inWidth: inElement.ksWidth,
        inputClassName: inElement.ksInputClassName,
        inDataListSource: inElement.getAttribute("ksDataListSource") || defaultOptions.inDataListSource,
        inDataListFillName: inElement.getAttribute("ksDataListFillName") || defaultOptions.inDataListFillName,
        inDataStore: inElement.dataStore,
        inputClass: inElement.getAttribute("ksInputClass") || defaultOptions.inputClass,
        inType: inElement.getAttribute("ksType") || defaultOptions.inType
    };
};

export { defaultOptions };
export default getInputOptions;

