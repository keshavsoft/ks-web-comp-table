export const createMenu = ({ menuMobileClass, menuDesktopClass } = {}) => {
    const menu = document.createElement("ul");
    menu.classList.add("hidden");
    
    const updateLayout = () => {
        const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
        const isHidden = menu.classList.contains("hidden");
        
        if (isMobile) {
            menu.className = menuMobileClass || "";
        } else {
            menu.className = menuDesktopClass || "";
        }
        
        if (isHidden) menu.classList.add("hidden");
    };

    updateLayout();

    const mql = window.matchMedia("(max-width: 767.98px)");
    mql.addEventListener ? mql.addEventListener("change", updateLayout) : mql.addListener(updateLayout);

    return menu;
};
