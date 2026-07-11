const createTextInput = ({
    type,
    inPlaceholder,
    name, tabIndex,
    inClassName, inputClassName, inputClass
}) => {
    const localInput =
        document.createElement("input");

    localInput.type = type;
    localInput.placeholder = inPlaceholder;
    localInput.name = name;
    localInput.setAttribute("class", inputClass || inputClassName || inClassName);
    // console.log("cccccccc : ", tabIndex);

    if (tabIndex && tabIndex !== "undefined") {
        localInput.setAttribute("tabindex", tabIndex);
    };

    return localInput;
};

export default createTextInput;
