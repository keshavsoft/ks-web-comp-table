const defaultOptions = {
    inPlaceholder: "",
    name: "",
    inClassName: "w-full border rounded px-2 py-1",
    inShowDataList: undefined,
    inColumnsConfig: [],
    inOnChangeFunc: undefined,
    inOnChangeType: undefined,
    inOnKeyDown: undefined,
    onKeyDownType: undefined,
    inRightAlign: undefined,
    inWidth: undefined,
    inputClassName: undefined,
    inDataListSource: "",
    inDataListFillName: "",
    inDataStore: undefined,
    inputClass: "",
    type: "text",
    enterAsTab: false,
    evalformula: undefined,
    evalToControl: undefined,
    value: ""
};

const getAttr = (el, names) => {
    for (const name of names) {
        if (el.hasAttribute(name)) {
            return el.getAttribute(name);
        }
    }
    return null;
};

const getBoolAttr = (el, names) => {
    for (const name of names) {
        if (el.hasAttribute(name)) {
            const val = el.getAttribute(name);
            return val === "false" ? false : true;
        }
    }
    return null;
};

const getInputOptions = ({ inElement }) => {
    const localName =
        inElement.ksName ||
        getAttr(inElement, ["ksName", "ks-name", "name"]) ||
        defaultOptions.name;

    const placeholder =
        inElement.ksPlaceholder ||
        getAttr(inElement, ["ksPlaceholder", "ks-placeholder", "placeholder"]) ||
        defaultOptions.inPlaceholder;

    const className =
        inElement.ksClassName ||
        getAttr(inElement, ["ksClassName", "ks-class-name", "class"]) ||
        defaultOptions.inClassName;

    const showDataList =
        inElement.ksShowDataList !== undefined
            ? inElement.ksShowDataList
            : getBoolAttr(inElement, ["ksShowDataList", "ks-show-data-list"]);

    const columnsConfig = (() => {
        const val =
            inElement.ksInColumnsConfig ||
            getAttr(inElement, ["ksInColumnsConfig", "ks-in-columns-config"]);
        if (typeof val === "string") {
            try {
                return JSON.parse(val);
            } catch {
                return defaultOptions.inColumnsConfig;
            }
        }
        return val || defaultOptions.inColumnsConfig;
    })();

    const onChangeFunc =
        inElement.ksOnChangeFunc ||
        getAttr(inElement, ["ksOnChangeFunc", "ks-on-change-func"]);

    const onChangeType =
        inElement.ksOnChangeType ||
        getAttr(inElement, ["ksOnChangeType", "ks-on-change-type"]);

    const onKeyDown =
        inElement.ksOnKeyDown ||
        getAttr(inElement, ["ksOnKeyDown", "ks-on-key-down"]);

    const onKeyDownType =
        inElement.onKeyDownType ||
        getAttr(inElement, ["onKeyDownType", "ksOnKeyDownType", "ks - on - key - down - type"]);

    const rightAlign =
        inElement.ksRightAlign !== undefined
            ? inElement.ksRightAlign
            : getBoolAttr(inElement, ["ksRightAlign", "ks-right-align", "right-align"]);

    const width =
        inElement.ksWidth ||
        getAttr(inElement, ["ksWidth", "ks-width", "width"]) ||
        defaultOptions.inWidth;

    const inputClassName =
        inElement.ksInputClassName ||
        getAttr(inElement, ["ksInputClassName", "ks-input-class-name"]) ||
        defaultOptions.inputClassName;

    const dataListSource =
        getAttr(inElement, ["ksDataListSource", "ks-data-list-source", "data-list-source"]) ||
        defaultOptions.inDataListSource;

    const dataListFillName =
        getAttr(inElement, ["ksDataListFillName", "ks-data-list-fill-name", "data-list-fill-name"]) ||
        defaultOptions.inDataListFillName;

    const dataStore = inElement.dataStore || defaultOptions.inDataStore;

    const inputClass =
        getAttr(inElement, ["ksInputClass", "ks-input-class", "inputclass", "input-class"]) ||
        defaultOptions.inputClass;

    const type =
        getAttr(inElement, ["ksType", "ks-type", "type"]) ||
        defaultOptions.type;
    // console.log("bbbbbbbbbyyyyy : ", getAttr(inElement, ["enterAsTab"]));

    const enterAsTab = getAttr(inElement, ["enterAsTab"]) === "true" ||
        defaultOptions.enterAsTab;

    const evalformula = inElement.evalformula ||
        getAttr(inElement, ["evalformula"]) ||
        defaultOptions.evalformula;

    const evalToControl = inElement.evalToControl ||
        getAttr(inElement, ["evalToControl"]) ||
        defaultOptions.evalToControl;

    const value = inElement.value ||
        getAttr(inElement, ["value", "ksInValue"]) ||
        defaultOptions.value;

    const isNotEmpty =
        inElement.isNotEmpty ||
        getAttr(inElement, ["isNotEmpty"]) ||
        defaultOptions.isNotEmpty;

    const tabIndex = getAttr(inElement, ["tabIndex"]) ||
        defaultOptions.ksTabIndex;

    return {
        inPlaceholder: placeholder,
        name: localName,
        inClassName: className,
        inShowDataList: showDataList,
        inColumnsConfig: columnsConfig,
        inOnChangeFunc: onChangeFunc,
        inOnChangeType: onChangeType,
        inOnKeyDown: onKeyDown,
        onKeyDownType,
        inRightAlign: rightAlign,
        inWidth: width,
        inputClassName: inputClassName,
        inDataListSource: dataListSource,
        inDataListFillName: dataListFillName,
        inDataStore: dataStore,
        inputClass: inputClass,
        type,
        enterAsTab,
        evalformula,
        evalToControl,
        value,
        isNotEmpty,
        tabIndex
    };
};

export { defaultOptions };
export default getInputOptions;


