import { getIcon } from "../../../../Common/getIcon.js";

export const createBtnContent = (element, { btnContentClass, spanClass, chevronDivClass, iconChevronWrapperClass } = {}) => {
    const btnContent = document.createElement("div");
    btnContent.className = btnContentClass || "";

    const iconDiv = getIcon(element);
    if (iconDiv) {
        iconDiv.classList.add("order-1", "md:order-none");
    }

    const text = element.getAttribute("ks-textToShow") || "";
    const className = element.getAttribute("ks-className") || "";
    const span = document.createElement("span");
    span.textContent = text;
    span.className = className || spanClass || "";

    const chevronDiv = document.createElement("div");
    chevronDiv.className = chevronDivClass || "";
    chevronDiv.innerHTML = `
        <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    `;

    const iconChevronWrapper = document.createElement("div");
    iconChevronWrapper.className = iconChevronWrapperClass || "";

    if (iconDiv) {
        iconChevronWrapper.appendChild(iconDiv);
    }
    iconChevronWrapper.appendChild(chevronDiv);

    btnContent.append(iconChevronWrapper, span);
    return { btnContent, chevronDiv };
};
