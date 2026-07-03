const createNavigationWrapper = ({ inClassName }) => {
    const outerDiv = document.createElement("div");

    outerDiv.className = inClassName;

    return outerDiv;
};

export default createNavigationWrapper;
