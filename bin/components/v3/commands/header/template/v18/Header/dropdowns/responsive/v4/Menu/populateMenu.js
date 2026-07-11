export const populateMenu = (menu, children, defaults) => {
    children.forEach(child => {
        const li = document.createElement("li");
        if (child.tagName === "A") {
            const defaultAClass = defaults?.classes?.aClass || "";
            child.className = `${defaultAClass} ${child.className || ""}`.trim();
        }
        li.appendChild(child);
        menu.appendChild(li);
    });
};
