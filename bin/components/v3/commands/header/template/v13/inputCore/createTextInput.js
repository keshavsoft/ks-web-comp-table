const createTextInput = ({
    type,
    inPlaceholder,
    name,
    inClassName, inputClassName, inputClass
}) => {
    const localInput =
        document.createElement("input");

    localInput.type = type;
    localInput.placeholder = inPlaceholder;
    localInput.name = name;
    localInput.setAttribute("class", inputClass || inputClassName || inClassName);
    // localInput.setAttribute("list", "aaaaaaaaaaa");

    return localInput;
};

export default createTextInput;
