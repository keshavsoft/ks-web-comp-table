export const createAnchor = ({
    inHtmlId = "", inHref = "#", inClass = "", inTableName = ""
}) => {
    const a = document.createElement("a");

    a.id = inHtmlId;
    a.href = inHref;
    a.className = inClass;

    if (inTableName) {
        a.dataset.tableName = inTableName
    };

    return a;
};