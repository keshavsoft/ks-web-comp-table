export const buildButton = ({
    inText = "Save"
} = {}) => {
    const button = document.createElement("button");

    button.className = "w-full mt-2 px-4 py-1 bg-green-500 text-white rounded";
    button.textContent = inText;

    return button;
};
