const createTextInput = ({
    inType,
    inPlaceholder,
    inName,
    inClassName, inputClassName, inputClass
}) => {
    const localInput =
        document.createElement("input");

    localInput.type = inType;
    localInput.placeholder = inPlaceholder;
    localInput.name = inName;
    localInput.setAttribute("class", inputClass || inputClassName || inClassName);
    // localInput.setAttribute("list", "aaaaaaaaaaa");

    return localInput;
};

export default createTextInput;
