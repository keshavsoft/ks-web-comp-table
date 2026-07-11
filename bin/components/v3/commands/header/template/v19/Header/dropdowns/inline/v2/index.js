import { createContainer } from "./createContainer.js";
import { createButton } from "./createButton.js";
import { createBtnContent } from "./createBtnContent.js";
import { createMenu } from "./createMenu.js";
import { populateMenu } from "./populateMenu.js";
import { setupEventListeners } from "./setupEventListeners.js";

class KSDropdownInline extends HTMLElement {
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

customElements.define("ks-dropdown-inline", KSDropdownInline);
window.KSDropdownInline = KSDropdownInline;

export default {};
