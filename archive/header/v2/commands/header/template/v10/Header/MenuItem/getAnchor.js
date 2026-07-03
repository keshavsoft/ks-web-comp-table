export const getAnchor = (element) => {
    const a = document.createElement("a");

    a.id = element.getAttribute("ks-id") || "";
    a.href = element.getAttribute("ks-href") || "#";
    a.className = element.getAttribute("ks-class") || "";

    const tableName = element.getAttribute("ks-table-name");
    if (tableName) {
        a.dataset.tableName = tableName;
    }

    return a;
};
