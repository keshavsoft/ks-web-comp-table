const createNavigationBar = ({ inClassName }) => {
    const nav = document.createElement("nav");

    nav.className = inClassName;

    return nav;
};

export default createNavigationBar;
