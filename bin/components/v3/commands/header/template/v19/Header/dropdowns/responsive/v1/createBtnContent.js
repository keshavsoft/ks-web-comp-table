import { getIcon } from "../../../Common/getIcon.js";

export const createBtnContent = (element) => {
    const btnContent = document.createElement("div");
    btnContent.className = "flex items-center w-full md:w-auto justify-between md:justify-start";

    const iconDiv = getIcon(element);

    const text = element.getAttribute("ks-textToShow") || "";
    const className = element.getAttribute("ks-className") || "";
    const span = document.createElement("span");
    span.textContent = text;
    span.className = className || "ml-3 text-right w-full text-base md:w-auto md:text-center md:ml-0 lg:text-lg";

    const chevronDiv = document.createElement("div");
    chevronDiv.className = "ml-1 w-5 h-5 flex items-center justify-center transition-transform duration-200 ease-in-out transform";
    chevronDiv.innerHTML = `
        <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    `;

    btnContent.append(iconDiv, span, chevronDiv);
    return { btnContent, chevronDiv };
};
