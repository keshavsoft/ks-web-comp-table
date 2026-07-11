const createTextInput = ({
    type, inShowDataList,
    inPlaceholder, tabIndex,
    name, isNotEmpty, inDataListSource,
    inClassName, inputClassName, inputClass
}) => {
    // console.log("inDataListSource : ", inDataListSource);

    const localInput =
        document.createElement("input");

    localInput.type = type;

    if (isNotEmpty && isNotEmpty !== "false" && isNotEmpty !== "undefined") {
        localInput.placeholder = `${inPlaceholder} *`;
    } else {
        localInput.placeholder = inPlaceholder;
    };

    localInput.name = name;
    localInput.setAttribute("class", inputClass || inputClassName || inClassName);

    if (inDataListSource) {
        localInput.setAttribute("list", `${name}List`);
    };

    if (tabIndex && tabIndex !== "undefined") {
        localInput.setAttribute("tabindex", tabIndex);
    };

    return localInput;
};

export default createTextInput;
