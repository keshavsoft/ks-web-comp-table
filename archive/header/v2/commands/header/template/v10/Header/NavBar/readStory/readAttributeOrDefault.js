const readAttributeOrDefault = (element, name, defaultValue) => {
    const value = element.getAttribute(name);
    return value === null ? defaultValue : value;
};

export default readAttributeOrDefault;
