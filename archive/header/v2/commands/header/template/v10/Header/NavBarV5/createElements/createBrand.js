export const createBrand = (story) => {
    const brand = document.createElement("div");
    brand.className = story.brandClass;
    brand.id = story.titleId || "titlehtmlId";
    brand.innerText = story.title || "KeshavSoft";
    return brand;
};
