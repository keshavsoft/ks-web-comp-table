export const setupEventListeners = (button, menu, chevronDiv) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = menu.classList.toggle("hidden");
        if (!isHidden) {
            chevronDiv.classList.add("rotate-180");
        } else {
            chevronDiv.classList.remove("rotate-180");
        }

        document.querySelectorAll("ks-dropdown ul, ks-dropdown-absolute ul, ks-dropdown-responsive ul, ks-dropdown-inline ul").forEach(otherMenu => {
            if (otherMenu !== menu) {
                otherMenu.classList.add("hidden");
                otherMenu.previousElementSibling?.querySelector("div:last-child")?.classList.remove("rotate-180");
            }
        });
    });

    document.addEventListener("click", () => {
        menu.classList.add("hidden");
        chevronDiv.classList.remove("rotate-180");
    });
};
