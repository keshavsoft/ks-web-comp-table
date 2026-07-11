export const setupEventListeners = (button, menu, chevronDiv) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = menu.classList.toggle("hidden");
        if (!isHidden) {
            chevronDiv.classList.add("rotate-180");
        } else {
            chevronDiv.classList.remove("rotate-180");
        }

        document.querySelectorAll("ks-dropdown ul, ks-dropdown-inline ul").forEach(otherMenu => {
            if (otherMenu !== menu) {
                otherMenu.classList.add("hidden");
                const lastDiv = otherMenu.previousElementSibling?.querySelector("div:last-child");
                if (lastDiv) {
                    lastDiv.classList.remove("rotate-180");
                } else {
                    // For inline dropdown, chevron is on the last-child of the button's wrapper
                    otherMenu.previousElementSibling?.querySelector("svg")?.parentElement?.classList.remove("rotate-180");
                }
            }
        });
    });

    document.addEventListener("click", () => {
        menu.classList.add("hidden");
        chevronDiv.classList.remove("rotate-180");
    });
};
