import { getAnchor } from "./getAnchor.js";
import { getIcon } from "./getIcon.js";
import { onClick } from "./onClick.js";

class KSMenuItem extends HTMLElement {
    connectedCallback() {
        const a = getAnchor(this);
        const svg = getIcon(this);

        const text = this.getAttribute("ks-textToShow") || "";
        const className = this.getAttribute("ks-className") || "";

        const span = document.createElement("span");
        span.textContent = text;
        span.className = className;

        while (this.firstChild) {
            a.appendChild(
                this.firstChild
            );
        }

        a.append(
            svg,
            span
        );

        a.addEventListener("click", onClick);

        this.appendChild(a);
    }
}

customElements.define(
    "ks-menu-item",
    KSMenuItem
);

window.KSMenuItem = KSMenuItem;

export default {};


