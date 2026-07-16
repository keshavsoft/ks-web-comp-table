export const createMenu = () => {
    const menu = document.createElement("ul");
    
    const updateLayout = () => {
        const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
        const isHidden = menu.classList.contains("hidden");
        
        if (isMobile) {
            menu.className = "relative w-full mt-2 rounded-md bg-gray-800 focus:outline-none z-50 p-1 space-y-1 text-left";
        } else {
            menu.className = "absolute right-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-48 rounded-md shadow-2xl bg-gray-800 border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-1 space-y-1 text-left";
        }
        
        if (isHidden) {
            menu.classList.add("hidden");
        } else {
            menu.classList.remove("hidden");
        }
    };

    // Run initially
    updateLayout();

    // Listen for viewport width changes across the 768px breakpoint
    const mql = window.matchMedia("(max-width: 767.98px)");
    if (mql.addEventListener) {
        mql.addEventListener("change", updateLayout);
    } else {
        mql.addListener(updateLayout);
    }

    return menu;
};
