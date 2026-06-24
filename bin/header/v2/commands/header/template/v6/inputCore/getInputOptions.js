const getInputOptions = ({ inElement }) => {
    const localName =
        inElement.ksName || "";

    console.log("inElement : ", inElement);

    return {
        inPlaceholder: inElement.ksPlaceholder || "",
        inName: localName,
        inClassName: inElement.ksClassName ||
            "w-full border rounded px-2 py-1",
        inShowDataList: inElement.ksShowDataList,
        inColumnsConfig: inElement.ksInColumnsConfig || [],
        inOnChangeFunc: inElement.ksOnChangeFunc,
        inOnChangeType: inElement.ksOnChangeType,
        inOnKeyDown: inElement.ksOnKeyDown,
        inOnKeyDownType: inElement.ksOnKeyDownType,
        inRightAlign: inElement.ksRightAlign,
        inWidth: inElement.ksWidth,
        inputClassName: inElement.ksInputClassName,
        inDataListSource: inElement.getAttribute("ksDataListSource") || "",
        inDataListFillName: inElement.getAttribute("ksDataListFillName") || "",
        inDataStore: inElement.dataStore,
        inputClass: inElement.getAttribute("ksInputClass") || "",
        inType: inElement.getAttribute("ksType") || "text"
    };
};

export default getInputOptions;
