const createUpdateButton = () => {
    const btn = document.createElement("button");
    btn.textContent = "Update";
    btn.className = "updateButton px-2 py-1 bg-green-500 text-white rounded mr-2";
    btn.style.display = "none";
    return btn;
};

export default createUpdateButton;
