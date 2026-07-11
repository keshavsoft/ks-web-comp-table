export const populateMenu = (menu, children) => {
    children.forEach(child => {
        const li = document.createElement("li");
        if (child.tagName === "A") {
            child.className = `block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-150 ${child.className || ""}`.trim();
        }
        li.appendChild(child);
        menu.appendChild(li);
    });
};
