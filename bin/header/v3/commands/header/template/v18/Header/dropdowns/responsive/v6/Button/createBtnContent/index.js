import { getIcon } from "../../../../../Common/getIcon.js";
import { createSpan } from "./createSpan.js";
import { createChevron } from "./createChevron.js";
import { createIconChevronWrapper } from "./createIconChevronWrapper.js";

export const createBtnContent = (element, { btnContentClass, spanClass, chevronDivClass, iconChevronWrapperClass } = {}) => {
    const btnContent = document.createElement("div");
    btnContent.className = btnContentClass || "";

    const iconDiv = getIcon(element);
    if (iconDiv) {
        iconDiv.classList.add("order-1", "md:order-none");
    }

    const span = createSpan(element, spanClass);
    const chevronDiv = createChevron(chevronDivClass);
    const iconChevronWrapper = createIconChevronWrapper(iconDiv, chevronDiv, iconChevronWrapperClass);

    btnContent.append(iconChevronWrapper, span);
    return { btnContent, chevronDiv };
};
