const getClosestCustomElement = (element) => {
    let current = element.parentElement;
    while (current) {
        if (current.tagName && current.tagName.includes("-")) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
};

export default getClosestCustomElement;
