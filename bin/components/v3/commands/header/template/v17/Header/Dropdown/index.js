import { getIcon } from "../MenuItem/getIcon.js";

class KSDropdown extends HTMLElement {
    connectedCallback() {
        if (this.dataset.rendered === "true") return;
        this.dataset.rendered = "true";

        // Create container div
        const container = document.createElement("div");
        container.className = "relative inline-block text-left w-full md:w-auto";

        // Create trigger button
        const button = document.createElement("button");
        const customClass = this.getAttribute("ks-class") || "";
        // Design button to match the style of ks-menu-item anchors
        button.className = `${customClass} flex justify-between items-center w-full px-4 py-2 rounded-md hover:bg-gray-600 active:bg-gray-500 active:scale-95 transition-all duration-150 md:flex-row md:justify-center md:items-center lg:bg-transparent lg:px-2 lg:py-1 cursor-pointer`.trim();
        button.type = "button";

        // Button contents wrapper
        const btnContent = document.createElement("div");
        btnContent.className = "flex items-center w-full md:w-auto justify-between md:justify-start";

        // Icon
        const iconDiv = getIcon(this);

        // Text
        const text = this.getAttribute("ks-textToShow") || "";
        const className = this.getAttribute("ks-className") || "";
        const span = document.createElement("span");
        span.textContent = text;
        span.className = className || "ml-3 text-right w-full text-base md:w-auto md:text-center md:ml-0 lg:text-lg";

        // Chevron icon on the right
        const chevronDiv = document.createElement("div");
        chevronDiv.className = "ml-1 w-5 h-5 flex items-center justify-center transition-transform duration-200 ease-in-out transform";
        chevronDiv.innerHTML = `
            <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        `;

        btnContent.append(iconDiv, span, chevronDiv);
        button.appendChild(btnContent);

        // Submenu container (ul)
        const menu = document.createElement("ul");
        menu.className = "hidden absolute right-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-48 rounded-md shadow-2xl bg-gray-800 border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-1 space-y-1 text-left";

        // Move children
        const children = Array.from(this.children);
        children.forEach(child => {
            const li = document.createElement("li");
            if (child.tagName === "A") {
                child.className = `block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-150 ${child.className || ""}`.trim();
            }
            li.appendChild(child);
            menu.appendChild(li);
        });

        // Click handler to toggle dropdown menu
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const isHidden = menu.classList.toggle("hidden");
            if (!isHidden) {
                chevronDiv.classList.add("rotate-180");
            } else {
                chevronDiv.classList.remove("rotate-180");
            }

            // Close any other open dropdowns
            document.querySelectorAll("ks-dropdown ul").forEach(otherMenu => {
                if (otherMenu !== menu) {
                    otherMenu.classList.add("hidden");
                    otherMenu.previousElementSibling?.querySelector("div:last-child")?.classList.remove("rotate-180");
                }
            });
        });

        // Close on click outside
        document.addEventListener("click", () => {
            menu.classList.add("hidden");
            chevronDiv.classList.remove("rotate-180");
        });

        container.append(button, menu);
        this.appendChild(container);
    }
}

customElements.define("ks-dropdown", KSDropdown);
window.KSDropdown = KSDropdown;
export default {};
