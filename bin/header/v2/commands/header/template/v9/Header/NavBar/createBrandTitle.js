const createBrandTitle = ({ inTitleId, inTitle, inClassName }) => {
    const brand = document.createElement("div");

    brand.className = inClassName;
    brand.id = inTitleId || "titlehtmlId";
    brand.innerText = inTitle || "KeshavSoft";

    return brand;
};

export default createBrandTitle;
