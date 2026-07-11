const createCancelButton = () => {
    const btn = document.createElement("button");
    btn.textContent = "Cancel";
    btn.className = "px-2 py-1 bg-gray-500 text-white rounded";
    btn.style.display = "none";
    return btn;
};

export default createCancelButton;
