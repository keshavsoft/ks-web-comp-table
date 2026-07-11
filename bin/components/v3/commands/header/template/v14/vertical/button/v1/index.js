import { buildButton } from "./BuildButton/buildButton.js";

class KsButton extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;

        this.dataset.rendered = "true";

        const button = buildButton({
            inText: this.getAttribute("text") || "Save"
        });

        button.addEventListener("click", event => {
            event.preventDefault();

            const form = this.closest("form");

            const data = Object.fromEntries(
                [...form.querySelectorAll("input")]
                    .map(input => [input.name, input.value])
            );

            // console.log(data);
            this.onClick?.(data);
        });

        this.appendChild(button);
    }
}

customElements.define("ks-button", KsButton);

export default KsButton;
