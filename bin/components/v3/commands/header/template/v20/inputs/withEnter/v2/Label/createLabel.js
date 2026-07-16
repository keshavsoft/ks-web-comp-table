const createLabel = ({ labelText, inLabelClass }) => {
    const label = document.createElement("label");

    // if (inLabelClass)     label.className = inLabelClass || "w-24 text-sm font-medium";
    if (inLabelClass) label.className = inLabelClass;

    label.textContent = labelText;

    return label;
};

export default createLabel;
