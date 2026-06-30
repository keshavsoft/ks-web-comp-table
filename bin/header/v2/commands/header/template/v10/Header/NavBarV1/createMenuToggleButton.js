const createMenuToggleButton = ({ inMenu, inClassName }) => {
    const button = document.createElement("button");

    button.className = inClassName;
    button.innerText = "☰";

    button.addEventListener("click", () => {
        inMenu.classList.toggle("hidden");
    });

    return button;
};

export default createMenuToggleButton;
