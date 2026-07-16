export const createButton = (element) => {
    const button = document.createElement("button");
    const customClass = element.getAttribute("ks-class") || "";
    button.className = `${customClass} flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-gray-700 active:bg-gray-600 transition-all duration-150 cursor-pointer`.trim();
    button.type = "button";
    return button;
};
