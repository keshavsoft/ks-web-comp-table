import composeNavigationStory from "./composeNavigationStory.js";
import navDefaults from "./navDefaults.js";
import navUsage from "./navUsage.js";

class KSNav extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;

        this.dataset.rendered = "true";

        this.appendChild(
            composeNavigationStory({
                inElement: this
            })
        );
    }
}

KSNav.defaults = navDefaults;
KSNav.usage = navUsage;

customElements.define(
    "ks-nav",
    KSNav
);

window.KSNav = KSNav;

export default {};
