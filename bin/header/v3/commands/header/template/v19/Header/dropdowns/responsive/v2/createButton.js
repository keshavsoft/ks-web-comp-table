export const createButton = (element) => {
    const button = document.createElement("button");
    const customClass = element.getAttribute("ks-class") || "";
    button.className = `${customClass} flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-gray-600 active:bg-gray-500 active:scale-95 transition-all duration-150 md:flex-col md:justify-center md:items-center lg:bg-transparent lg:px-2 lg:py-1 cursor-pointer`.trim();
    button.type = "button";
    return button;
};
