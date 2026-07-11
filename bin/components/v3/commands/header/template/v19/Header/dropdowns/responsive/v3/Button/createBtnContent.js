import { getIcon } from "../../../../Common/getIcon.js";

export const createBtnContent = (element) => {
    const btnContent = document.createElement("div");
    btnContent.className = "flex flex-row items-center w-full justify-between md:flex-col md:justify-center md:items-center md:w-auto gap-y-1";

    const iconDiv = getIcon(element);
    if (iconDiv) {
        iconDiv.classList.add("order-1", "md:order-none");
    }

    const text = element.getAttribute("ks-textToShow") || "";
    const className = element.getAttribute("ks-className") || "";
    const span = document.createElement("span");
    span.textContent = text;
    span.className = className || "order-2 md:order-none ml-3 text-right text-base md:text-center md:ml-0 lg:text-lg";

    const chevronDiv = document.createElement("div");
    chevronDiv.className = "order-3 md:order-none ml-1 w-5 h-5 flex items-center justify-center transition-transform duration-200 ease-in-out transform";
    chevronDiv.innerHTML = `
        <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    `;

    const iconChevronWrapper = document.createElement("div");
    iconChevronWrapper.className = "contents md:flex md:flex-row md:items-center md:justify-center md:gap-x-1";

    if (iconDiv) {
        iconChevronWrapper.appendChild(iconDiv);
    }
    iconChevronWrapper.appendChild(chevronDiv);

    btnContent.append(iconChevronWrapper, span);
    return { btnContent, chevronDiv };
};
