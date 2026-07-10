export const populateMenu = (menu, children, defaultAClass) => {
    children.forEach(child => {
        const li = document.createElement("li");
        if (child.tagName === "A") {
            child.className = `${defaultAClass || ""} ${child.className || ""}`.trim();
        }
        li.appendChild(child);
        menu.appendChild(li);
    });
};
