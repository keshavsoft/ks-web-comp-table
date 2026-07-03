import navDefaults from "./navDefaults.js";

const readAttributeOrDefault = (element, name, defaultValue) => {
    const value = element.getAttribute(name);
    return value === null ? defaultValue : value;
};

export const readStory = (element) => {
    return {
        navClass: readAttributeOrDefault(element, "ks-nav-class", navDefaults.navClass),
        outerClass: readAttributeOrDefault(element, "ks-outer-class", navDefaults.outerClass),
        innerClass: readAttributeOrDefault(element, "ks-inner-class", navDefaults.innerClass),
        titleId: element.getAttribute("ks-title-id"),
        title: element.getAttribute("ks-title"),
        brandClass: readAttributeOrDefault(element, "ks-brand-class", navDefaults.brandClass),
        menuClass: readAttributeOrDefault(element, "ks-menu-class", navDefaults.menuClass),
        menuExtraClass: element.getAttribute("ks-ul-class"),
        buttonClass: readAttributeOrDefault(element, "ks-button-class", navDefaults.buttonClass)
    };
};
