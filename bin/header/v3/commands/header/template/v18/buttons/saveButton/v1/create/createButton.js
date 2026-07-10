const createButton = () => {
    const btn = document.createElement("button");
    btn.textContent = "Save";
    btn.className = "px-3 py-1 bg-green-500 text-white rounded";
    return btn;
};

export { createButton };
