const isFocusableInput = (input) => {
    const type = input.type?.toLowerCase();
    const ignoredTypes = ["hidden", "button", "submit", "reset"];
    return !input.disabled && !input.readOnly && !ignoredTypes.includes(type);
};

export default isFocusableInput;
