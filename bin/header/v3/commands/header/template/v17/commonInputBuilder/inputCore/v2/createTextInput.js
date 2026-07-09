const createTextInput = ({
    type,
    inPlaceholder,
    name, isNotEmpty,
    inClassName, inputClassName, inputClass
}) => {
    // console.log("isNotEmpty : ", isNotEmpty);

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
    // localInput.setAttribute("list", "aaaaaaaaaaa");

    return localInput;
};

export default createTextInput;
