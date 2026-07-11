export const createIconChevronWrapper = (iconDiv, chevronDiv, wrapperClass) => {
    const iconChevronWrapper = document.createElement("div");
    iconChevronWrapper.className = wrapperClass || "";
    if (iconDiv) {
        iconChevronWrapper.appendChild(iconDiv);
    }
    iconChevronWrapper.appendChild(chevronDiv);
    return iconChevronWrapper;
};
