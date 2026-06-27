import { createAnchor } from "./createAnchor.js";
import { createIcon } from "./createIcon.js";

class KSMenuItem extends HTMLElement {
    connectedCallback() {
        const a = createAnchor({
            inHtmlId: this.getAttribute("ks-id"),
            inHref: this.getAttribute("ks-href"),
            inTableName: this.getAttribute("ks-table-name"),
            inClass: this.getAttribute("ks-class")
        });

        const text = this.getAttribute("ks-textToShow") || "";
        const className = this.getAttribute("ks-className") || "";

        const svgName = this.getAttribute("ks-svgName") || "";
        const svgDivClass = this.getAttribute("ks-svgDivClass") || "";

        const svg = createIcon({
            inSvgName: svgName,
            inSvgDivClass: svgDivClass
        });

        const span =
            document.createElement("span");

        span.textContent = text;

        span.className = className;

        while (this.firstChild) {
            a.appendChild(
                this.firstChild
            );
        };

        a.append(
            svg,
            span
        );

        a.addEventListener("click", event => {
            const menu = event.currentTarget
                .closest("nav")
                ?.querySelector("#menu");

            // console.log("menu : ", menu);

            menu?.classList.add("hidden");
        });

        this.appendChild(a);
    }
}

customElements.define(
    "ks-menu-item",
    KSMenuItem
);

window.KSMenuItem = KSMenuItem;

export default {};
