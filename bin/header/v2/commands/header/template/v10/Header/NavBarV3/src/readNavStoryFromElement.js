import navDefaults from "../navDefaults.js";
import readAttributeOrDefault from "./readAttributeOrDefault.js";

const readNavStoryFromElement = ({ inElement }) => {
    return {
        navClass: readAttributeOrDefault({
            inElement,
            inName: "ks-nav-class",
            inDefaultValue: navDefaults.navClass
        }),
        outerClass: readAttributeOrDefault({
            inElement,
            inName: "ks-outer-class",
            inDefaultValue: navDefaults.outerClass
        }),
        innerClass: readAttributeOrDefault({
            inElement,
            inName: "ks-inner-class",
            inDefaultValue: navDefaults.innerClass
        }),
        titleId: inElement.getAttribute("ks-title-id"),
        title: inElement.getAttribute("ks-title"),
        brandClass: readAttributeOrDefault({
            inElement,
            inName: "ks-brand-class",
            inDefaultValue: navDefaults.brandClass
        }),
        menuClass: readAttributeOrDefault({
            inElement,
            inName: "ks-menu-class",
            inDefaultValue: navDefaults.menuClass
        }),
        menuExtraClass: inElement.getAttribute("ks-ul-class"),
        buttonClass: readAttributeOrDefault({
            inElement,
            inName: "ks-button-class",
            inDefaultValue: navDefaults.buttonClass
        })
    };
};

export default readNavStoryFromElement;
