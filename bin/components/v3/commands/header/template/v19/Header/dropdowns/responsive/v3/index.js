import { createButton } from "./Button/createButton.js";
import { createBtnContent } from "./Button/createBtnContent.js";
import { createMenu } from "./Menu/createMenu.js";
import { populateMenu } from "./Menu/populateMenu.js";
import { setupEventListeners } from "./Events/setupEventListeners.js";

class KSDropdownResponsive extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;
        this.dataset.rendered = "true";

        const container = document.createElement("li");
        container.className = "relative inline-block text-left w-full md:w-auto";

        const button = createButton(this);
        const { btnContent, chevronDiv } = createBtnContent(this);
        button.appendChild(btnContent);

        const menu = createMenu();
        populateMenu(menu, Array.from(this.children));

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
window.ks.components.dropdown.responsive.version = "v3";

export default {};
