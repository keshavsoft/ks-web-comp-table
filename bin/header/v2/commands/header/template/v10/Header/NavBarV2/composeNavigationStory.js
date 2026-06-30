import navDefaults from "./navDefaults.js";

const readAttributeOrDefault = ({ inElement, inName, inDefaultValue }) => {
    const value = inElement.getAttribute(inName);
    return value === null ? inDefaultValue : value;
};

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

const createNavigationBar = ({ inClassName }) => {
    const nav = document.createElement("nav");
    nav.className = inClassName;
    return nav;
};

const createNavigationWrapper = ({ inClassName }) => {
    const outerDiv = document.createElement("div");
    outerDiv.className = inClassName;
    return outerDiv;
};

const createNavigationRow = ({ inClassName }) => {
    const innerDiv = document.createElement("div");
    innerDiv.className = inClassName;
    return innerDiv;
};

const createBrandTitle = ({ inTitleId, inTitle, inClassName }) => {
    const brand = document.createElement("div");
    brand.className = inClassName;
    brand.id = inTitleId || "titlehtmlId";
    brand.innerText = inTitle || "KeshavSoft";
    return brand;
};

const createMenuList = ({ inClassName, inExtraClass }) => {
    const menu = document.createElement("ul");
    menu.id = "menu";
    menu.className = `${inClassName} ${inExtraClass || ""}`;
    return menu;
};

const createMenuToggleButton = ({ inMenu, inClassName }) => {
    const button = document.createElement("button");
    button.className = inClassName;
    button.innerText = "☰";
    button.addEventListener("click", () => {
        inMenu.classList.toggle("hidden");
    });
    return button;
};

const composeNavigationStory = ({ inElement }) => {
    const story = readNavStoryFromElement({ inElement });

    const nav = createNavigationBar({ inClassName: story.navClass });
    const wrapper = createNavigationWrapper({ inClassName: story.outerClass });
    const row = createNavigationRow({ inClassName: story.innerClass });
    const brand = createBrandTitle({
        inTitleId: story.titleId,
        inTitle: story.title,
        inClassName: story.brandClass
    });
    const menu = createMenuList({
        inClassName: story.menuClass,
        inExtraClass: story.menuExtraClass
    });
    const toggleButton = createMenuToggleButton({
        inMenu: menu,
        inClassName: story.buttonClass
    });

    row.append(brand, toggleButton, menu);
    wrapper.appendChild(row);
    nav.appendChild(wrapper);

    return nav;
};

export default composeNavigationStory;
