const applyParentCellStyle = ({
    inElement,
    inRightAlign,
    inWidth
}) => {
    const localClosestTd =
        inElement.closest("td");

    if (!localClosestTd) return;

    if (inWidth) {
        localClosestTd.style.width = inWidth;
    };

    if (inRightAlign) {
        localClosestTd.classList.add("text-right");
    };
};

export default applyParentCellStyle;
