const defaultSampleData = [
    { pk: 139, LedgerName: "Keshav Industries", InvoiceDate: "2026-07-10", lines: 3, Qty: 150.00, Amount: 12450.00, TimeSpan: "2m ago" },
    { pk: 138, LedgerName: "Appanna & Sons", InvoiceDate: "2026-07-09", lines: 1, Qty: 2.14, Amount: 1005.80, TimeSpan: "19h ago" },
    { pk: 137, LedgerName: "Kapila Enterprises", InvoiceDate: "2026-07-09", lines: 2, Qty: 11.00, Amount: 1410.00, TimeSpan: "20h ago" },
    { pk: 136, LedgerName: "X Traders", InvoiceDate: "2026-07-08", lines: 2, Qty: 3.68, Amount: 1177.60, TimeSpan: "1d ago" },
    { pk: 135, LedgerName: "Venkateshwara Steels", InvoiceDate: "2026-07-07", lines: 5, Qty: 85.50, Amount: 9420.00, TimeSpan: "3d ago" }
];

class KsCards extends HTMLElement {
    constructor() {
        super();
        this._data = [];
    }

    get data() {
        return this._data;
    }

    set data(value) {
        if (Array.isArray(value)) {
            this._data = value;
            this.render();
        }
    }

    init(data) {
        this.data = data;
    }

    connectedCallback() {
        if (!this._data || this._data.length === 0) {
            this._data = defaultSampleData;
        }
        this.render();
    }

    render() {
        this.innerHTML = "";

        const container = document.createElement("div");
        container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4";

        this._data.forEach(item => {
            const card = document.createElement("div");
            card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-150 flex flex-col justify-between";

            const accentBar = document.createElement("div");
            accentBar.className = "h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600";
            card.appendChild(accentBar);

            const content = document.createElement("div");
            content.className = "p-5 flex-grow";

            const header = document.createElement("div");
            header.className = "flex justify-between items-center mb-3";

            const pkBadge = document.createElement("span");
            pkBadge.className = "px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-100";
            pkBadge.textContent = `#${item.pk || 'N/A'}`;

            const timeSpan = document.createElement("span");
            timeSpan.className = "text-xs text-gray-400 font-medium";
            timeSpan.textContent = item.TimeSpan || "";

            header.appendChild(pkBadge);
            header.appendChild(timeSpan);
            content.appendChild(header);

            const title = document.createElement("h3");
            title.className = "text-lg font-bold text-gray-800 mb-1 hover:text-blue-600 transition-colors truncate";
            title.textContent = item.LedgerName || "Unnamed";
            title.title = item.LedgerName || "Unnamed";
            content.appendChild(title);

            const date = document.createElement("div");
            date.className = "text-xs text-gray-500 flex items-center gap-1 mb-4";
            date.innerHTML = `
                <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>${item.InvoiceDate || "N/A"}</span>
            `;
            content.appendChild(date);

            const stats = document.createElement("div");
            stats.className = "grid grid-cols-3 gap-2 bg-gray-50 rounded-lg p-3 text-center mb-4";

            const linesStat = document.createElement("div");
            linesStat.innerHTML = `
                <div class="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Lines</div>
                <div class="text-sm font-bold text-gray-700">${item.lines || 0}</div>
            `;

            const qtyStat = document.createElement("div");
            qtyStat.innerHTML = `
                <div class="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Qty</div>
                <div class="text-sm font-bold text-gray-700">${parseFloat(item.Qty || 0).toFixed(2)}</div>
            `;

            const amountStat = document.createElement("div");
            amountStat.innerHTML = `
                <div class="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Amount</div>
                <div class="text-sm font-extrabold text-indigo-600">₹${parseFloat(item.Amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            `;

            stats.appendChild(linesStat);
            stats.appendChild(qtyStat);
            stats.appendChild(amountStat);
            content.appendChild(stats);

            card.appendChild(content);

            const footer = document.createElement("div");
            footer.className = "px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-end gap-2 rounded-b-xl";

            const viewBtn = document.createElement("button");
            viewBtn.className = "px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-900 border border-gray-200 rounded-md transition-all duration-200 shadow-sm flex items-center gap-1";
            viewBtn.innerHTML = `
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                View
            `;
            viewBtn.onclick = () => {
                const event = new CustomEvent("show-detail", {
                    bubbles: true,
                    composed: true,
                    detail: { pk: item.pk, item }
                });
                card.dispatchEvent(event);
            };

            const editBtn = document.createElement("button");
            editBtn.className = "px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200 shadow-sm flex items-center gap-1";
            editBtn.innerHTML = `
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Edit
            `;
            editBtn.onclick = () => {
                const event = new CustomEvent("edit-detail", {
                    bubbles: true,
                    composed: true,
                    detail: { pk: item.pk, item }
                });
                card.dispatchEvent(event);
            };

            footer.appendChild(viewBtn);
            footer.appendChild(editBtn);
            card.appendChild(footer);

            container.appendChild(card);
        });

        this.appendChild(container);
    }
}

if (!customElements.get("ks-cards")) {
    customElements.define("ks-cards", KsCards);
}

window.ks = window.ks || {};
window.ks.components = window.ks.components || {};
window.ks.components.cards = KsCards;

export default KsCards;
export { KsCards };
