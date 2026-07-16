const startFunc = (element) => {
    return element.closest("form") ||
        element.closest("fieldset") ||
        element.closest("tr") ||
        element.closest("body");
};

export default startFunc;
