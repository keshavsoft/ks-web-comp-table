const readAttributeOrDefault = ({ inElement, inName, inDefaultValue }) => {
    const value = inElement.getAttribute(inName);

    if (value === null) return inDefaultValue;

    return value;
};

export default readAttributeOrDefault;
