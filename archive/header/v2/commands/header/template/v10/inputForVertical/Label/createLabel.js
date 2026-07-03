const createLabel = ({ labelText, inLabelClass }) => {
    const label = document.createElement("label");

    label.className = inLabelClass || "w-24 text-sm font-medium";
    label.textContent = labelText;

    return label;
};

export default createLabel;
