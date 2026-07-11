export const buildButton = ({
    inText = "Save",
    inClass = "w-full mt-2 px-4 py-1 bg-green-500 text-white rounded"
} = {}) => {
    const button = document.createElement("button");

    button.className = inClass;
    button.textContent = inText;
    button.setAttribute("type", "button");

    return button;
};
