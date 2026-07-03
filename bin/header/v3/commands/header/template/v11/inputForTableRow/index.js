import { highlight } from "./highlight.js";

class KsTableBodyCell extends HTMLElement {
    connectedCallback() {
        const value = this.ksValue ?? "";
        const rightAlign = this.ksRightAlign;
        const width = this.ksWidth;
        const searchValue = this.ksSearchValue;

        const closestTd = this.closest("td");

        if (closestTd) {
            closestTd.style.width = width;

            if (rightAlign) {
                closestTd.classList.add("text-right");
            };
        };

        if (searchValue === undefined) {
            this.innerHTML = value;
        } else {

            this.innerHTML = highlight({
                text: value,
                searchValue
            });
        };

    }
}

if (!customElements.get("ks-table-body-cell")) {
    customElements.define("ks-table-body-cell", KsTableBodyCell);
}

export default {};
