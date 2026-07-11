export const createLayout = (story) => {
    const nav = document.createElement("nav");
    nav.className = story.navClass;

    const wrapper = document.createElement("div");
    wrapper.className = story.outerClass;

    const row = document.createElement("div");
    row.className = story.innerClass;

    wrapper.appendChild(row);
    nav.appendChild(wrapper);

    return { nav, wrapper, row };
};

export const createBrand = (story) => {
    const brand = document.createElement("div");
    brand.className = story.brandClass;
    brand.id = story.titleId || "titlehtmlId";
    brand.innerText = story.title || "KeshavSoft";
    return brand;
};

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
