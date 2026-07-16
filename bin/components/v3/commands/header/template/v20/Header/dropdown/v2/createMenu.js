export const createMenu = () => {
    const menu = document.createElement("ul");
    menu.className = "hidden absolute max-md:relative w-48 max-md:w-full mt-2 rounded-md bg-gray-800 border border-gray-700 ring-1 ring-black ring-opacity-5 shadow-2xl max-md:border-0 max-md:ring-0 max-md:shadow-none focus:outline-none z-50 p-1 space-y-1 text-left right-0 md:left-1/2 md:-translate-x-1/2";
    return menu;
};
