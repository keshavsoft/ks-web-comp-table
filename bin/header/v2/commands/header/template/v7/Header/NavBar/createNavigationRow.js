const createNavigationRow = ({ inClassName }) => {
    const innerDiv = document.createElement("div");

    innerDiv.className = inClassName;

    return innerDiv;
};

export default createNavigationRow;
