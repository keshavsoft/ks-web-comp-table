const readAttributeOrDefault = ({ inElement, inName, inDefaultValue }) => {
    const value = inElement.getAttribute(inName);
    return value === null ? inDefaultValue : value;
};

export default readAttributeOrDefault;
