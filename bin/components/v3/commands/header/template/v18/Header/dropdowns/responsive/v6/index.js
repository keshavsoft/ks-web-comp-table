import { createButton } from "./Button/createButton.js";
import { createBtnContent } from "./Button/createBtnContent/index.js";
import { createMenu } from "./Menu/createMenu.js";
import { populateMenu } from "./Menu/populateMenu.js";
import { setupEventListeners } from "./Events/setupEventListeners.js";

const defaults = {
    classes: {
        containerClass: "relative inline-block text-left w-full md:w-auto",
        buttonClass: "flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-gray-600 active:bg-gray-500 active:scale-95 transition-all duration-150 md:flex-col md:justify-center md:items-center lg:bg-transparent lg:px-2 lg:py-1 cursor-pointer",
        btnContentClass: "flex flex-row items-center w-full justify-between md:flex-col md:justify-center md:items-center md:w-auto gap-y-1",
        spanClass: "order-2 md:order-none ml-3 text-right text-base md:text-center md:ml-0 lg:text-lg",
        chevronDivClass: "order-3 md:order-none ml-1 w-5 h-5 flex items-center justify-center transition-transform duration-200 ease-in-out transform",
        iconChevronWrapperClass: "contents md:flex md:flex-row md:items-center md:justify-center md:gap-x-1",
        menuMobileClass: "relative w-full mt-2 rounded-md bg-gray-800 focus:outline-none z-50 p-1 space-y-1 text-left",
        menuDesktopClass: "absolute right-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-48 rounded-md shadow-2xl bg-gray-800 border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-1 space-y-1 text-left",
        aClass: "block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-150"
    }
};

class KSDropdownResponsive extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;
        this.dataset.rendered = "true";

        const container = document.createElement("li");
        container.className = defaults.classes.containerClass;

        const button = createButton(this, defaults.classes.buttonClass);
        const { btnContent, chevronDiv } = createBtnContent(this, defaults.classes);
        button.appendChild(btnContent);

        const menu = createMenu(defaults.classes);
        populateMenu(menu, Array.from(this.children), defaults.classes.aClass);

        setupEventListeners(button, menu, chevronDiv);

        container.append(button, menu);
        this.appendChild(container);
    }
}

if (!customElements.get("ks-dropdown-responsive")) {
    customElements.define("ks-dropdown-responsive", KSDropdownResponsive);
};

window.ks = window.ks || {};
window.ks.components = window.ks.components || {};
window.ks.components.dropdown = window.ks.components.dropdown || {};
window.ks.components.dropdown.responsive = window.ks.components.dropdown.responsive || {};
window.ks.components.dropdown.responsive.version = "v6";
window.ks.components.dropdown.responsive.defaults = defaults;

export default defaults;
