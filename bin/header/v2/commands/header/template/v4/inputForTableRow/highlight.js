const highlight = ({ text = "", searchValue = "" }) => {
    if (!searchValue) return text;

    try {
        const safeSearch = searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // escape regex
        const regex = new RegExp(`(${safeSearch})`, "gi");
        // return text.replace(regex, `<mark>$1</mark>`);
        // return text.replace(regex, `<mark class="bg-yellow-300 px-1 rounded">$1</mark>`);
        return text.replace(regex, `<mark class="bg-yellow-300">$1</mark>`);
    } catch (e) {
        return text; // fallback
    }
};

export { highlight };