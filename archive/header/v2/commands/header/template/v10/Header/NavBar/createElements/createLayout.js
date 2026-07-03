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
