import navDefaults from "./navDefaults.js";

const navUsage = {
    tagName: "ks-nav",
    attributes: {
        title: {
            name: "ks-title",
            defaultValue: "KeshavSoft"
        },
        titleId: {
            name: "ks-title-id",
            defaultValue: "titlehtmlId"
        },
        navClass: {
            name: "ks-nav-class",
            defaultValue: navDefaults.navClass
        },
        outerClass: {
            name: "ks-outer-class",
            defaultValue: navDefaults.outerClass
        },
        innerClass: {
            name: "ks-inner-class",
            defaultValue: navDefaults.innerClass
        },
        brandClass: {
            name: "ks-brand-class",
            defaultValue: navDefaults.brandClass
        },
        menuClass: {
            name: "ks-menu-class",
            defaultValue: navDefaults.menuClass
        },
        menuExtraClass: {
            name: "ks-ul-class",
            defaultValue: ""
        },
        buttonClass: {
            name: "ks-button-class",
            defaultValue: navDefaults.buttonClass
        }
    }
};

export default navUsage;
