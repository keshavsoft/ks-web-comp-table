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
        container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2";

        this._data.forEach(item => {
            const card = document.createElement("div");
            card.className = "bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden";

            const body = document.createElement("div");
            body.className = "p-4 flex-grow flex flex-col justify-between";

            const header = document.createElement("div");
            header.className = "flex justify-between items-start mb-2";

            const title = document.createElement("h3");
            title.className = "text-base font-bold text-gray-900 truncate pr-2";
            title.textContent = item.LedgerName || "Unnamed";
            title.title = item.LedgerName || "Unnamed";

            const pkBadge = document.createElement("span");
            pkBadge.className = "text-xs font-mono font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200 flex-shrink-0";
            pkBadge.textContent = `#${item.pk || 'N/A'}`;

            header.appendChild(title);
            header.appendChild(pkBadge);
            body.appendChild(header);

            const metaRow = document.createElement("div");
            metaRow.className = "flex justify-between items-center text-xs text-gray-500 mb-4";
            
            const dateSpan = document.createElement("span");
            dateSpan.textContent = item.InvoiceDate || "N/A";
            
            const timeSpan = document.createElement("span");
            timeSpan.className = "bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-medium";
            timeSpan.textContent = item.TimeSpan || "";

            metaRow.appendChild(dateSpan);
            metaRow.appendChild(timeSpan);
            body.appendChild(metaRow);

            const divider = document.createElement("div");
            divider.className = "border-t border-gray-100 my-2";
            body.appendChild(divider);

            const attributesGrid = document.createElement("div");
            attributesGrid.className = "grid grid-cols-3 gap-2 text-xs py-2";

            const linesCol = document.createElement("div");
            linesCol.innerHTML = `
                <div class="text-gray-400 font-medium">Lines</div>
                <div class="font-semibold text-gray-800 mt-0.5">${item.lines || 0}</div>
            `;

            const qtyCol = document.createElement("div");
            qtyCol.innerHTML = `
                <div class="text-gray-400 font-medium">Qty</div>
                <div class="font-semibold text-gray-800 mt-0.5">${parseFloat(item.Qty || 0).toFixed(2)}</div>
            `;

            const amountCol = document.createElement("div");
            amountCol.innerHTML = `
                <div class="text-gray-400 font-medium">Amount</div>
                <div class="font-bold text-gray-900 mt-0.5">₹${parseFloat(item.Amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            `;

            attributesGrid.appendChild(linesCol);
            attributesGrid.appendChild(qtyCol);
            attributesGrid.appendChild(amountCol);
            body.appendChild(attributesGrid);

            card.appendChild(body);

            const footer = document.createElement("div");
            footer.className = "px-4 py-2 bg-gray-50 border-t border-gray-200 flex justify-end gap-2";

            const viewBtn = document.createElement("button");
            viewBtn.className = "showButton px-3 py-1 bg-blue-500 text-white rounded text-xs font-semibold hover:bg-blue-600 transition-colors shadow-sm";
            viewBtn.textContent = "View";
            viewBtn.onclick = () => {
                const event = new CustomEvent("show-detail", {
                    bubbles: true,
                    composed: true,
                    detail: { pk: item.pk, item }
                });
                card.dispatchEvent(event);
            };

            const editBtn = document.createElement("button");
            editBtn.className = "editButton px-3 py-1 bg-yellow-400 text-white rounded text-xs font-semibold hover:bg-yellow-500 transition-colors shadow-sm";
            editBtn.textContent = "Edit";
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
