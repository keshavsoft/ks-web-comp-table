export const createMenu = (story) => {
    const menu = document.createElement("ul");
    menu.id = "menu";
    menu.className = `${story.menuClass} ${story.menuExtraClass || ""}`;

    const button = document.createElement("button");
    button.className = story.buttonClass;
    button.innerText = "☰";
    button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    return { menu, button };
};
