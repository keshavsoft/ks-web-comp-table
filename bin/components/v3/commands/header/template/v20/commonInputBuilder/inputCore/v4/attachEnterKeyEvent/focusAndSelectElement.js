const startFunc = (element) => {
    if (!element) return;

    element.focus();

    if (typeof element.select === "function") {
        element.select();
    };
};

export default startFunc;
