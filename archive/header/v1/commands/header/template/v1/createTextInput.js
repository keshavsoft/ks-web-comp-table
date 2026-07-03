const createTextInput = ({
    inType,
    inPlaceholder,
    inName,
    inClassName, inputClassName
}) => {
    const localInput =
        document.createElement("input");

    localInput.type = inType;
    localInput.placeholder = inPlaceholder;
    localInput.name = inName;
    localInput.setAttribute("class", inputClassName || inClassName);

    return localInput;
};

export default createTextInput;
