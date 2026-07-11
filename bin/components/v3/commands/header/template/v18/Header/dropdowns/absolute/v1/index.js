import { getIcon } from "../../../Common/getIcon.js";

const createContainer = () => {
    const container = document.createElement("li");
    container.className = "relative inline-block text-left w-full md:w-auto";
    return container;
};

const createButton = (element) => {
    const button = document.createElement("button");
    const customClass = element.getAttribute("ks-class") || "";
    button.className = `${customClass} flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-gray-600 active:bg-gray-500 active:scale-95 transition-all duration-150 md:flex-row md:justify-center md:items-center lg:bg-transparent lg:px-2 lg:py-1 cursor-pointer`.trim();
    button.type = "button";
    return button;
};

const createBtnContent = (element) => {
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

const createMenu = () => {
    const menu = document.createElement("ul");
    menu.className = "hidden absolute right-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-48 rounded-md shadow-2xl bg-gray-800 border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-1 space-y-1 text-left";
    return menu;
};

const populateMenu = (menu, children) => {
    children.forEach(child => {
        const li = document.createElement("li");
        if (child.tagName === "A") {
            child.className = `block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-150 ${child.className || ""}`.trim();
        }
        li.appendChild(child);
        menu.appendChild(li);
    });
};

const setupEventListeners = (button, menu, chevronDiv) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = menu.classList.toggle("hidden");
        if (!isHidden) {
            chevronDiv.classList.add("rotate-180");
        } else {
            chevronDiv.classList.remove("rotate-180");
        }

        document.querySelectorAll("ks-dropdown ul, ks-dropdown-absolute ul, ks-dropdown-responsive ul, ks-dropdown-inline ul").forEach(otherMenu => {
            if (otherMenu !== menu) {
                otherMenu.classList.add("hidden");
                otherMenu.previousElementSibling?.querySelector("div:last-child")?.classList.remove("rotate-180");
            }
        });
    });

    document.addEventListener("click", () => {
        menu.classList.add("hidden");
        chevronDiv.classList.remove("rotate-180");
    });
};

class KSDropdownAbsolute extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;
        this.dataset.rendered = "true";

        const container = createContainer();
        const button = createButton(this);
        const { btnContent, chevronDiv } = createBtnContent(this);
        button.appendChild(btnContent);

        const menu = createMenu();
        const children = Array.from(this.children);
        populateMenu(menu, children);

        setupEventListeners(button, menu, chevronDiv);

        container.append(button, menu);
        this.appendChild(container);
    }
}

customElements.define("ks-dropdown-absolute", KSDropdownAbsolute);
window.KSDropdownAbsolute = KSDropdownAbsolute;
export default {};
