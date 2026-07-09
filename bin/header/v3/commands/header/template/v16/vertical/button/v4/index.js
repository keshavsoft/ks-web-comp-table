import renderButton from "./render/start.js";

class KsButton extends HTMLElement {
    init(options) {
        this.options = options;
        this.render();
    }

    connectedCallback() {
        if (!this.dataset.rendered) {
            this.render();
        }
    }

    render() {
        this.dataset.rendered = "true";
        this.innerHTML = "";

        renderButton({
            element: this,
            options: this.options
        });
    }
}

if (!customElements.get("ks-button")) {
    customElements.define("ks-button", KsButton);
}

export default KsButton;
export { KsButton };
