import createBrandTitle from "./src/createBrandTitle.js";
import createMenuList from "./src/createMenuList.js";
import createMenuToggleButton from "./src/createMenuToggleButton.js";
import createNavigationBar from "./src/createNavigationBar.js";
import createNavigationRow from "./src/createNavigationRow.js";
import createNavigationWrapper from "./src/createNavigationWrapper.js";
import readNavStoryFromElement from "./src/readNavStoryFromElement.js";

const composeNavigationStory = ({ inElement }) => {
    const story = readNavStoryFromElement({
        inElement
    });

    const nav = createNavigationBar({
        inClassName: story.navClass
    });

    const wrapper = createNavigationWrapper({
        inClassName: story.outerClass
    });

    const row = createNavigationRow({
        inClassName: story.innerClass
    });

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

    row.append(
        brand,
        toggleButton,
        menu
    );

    wrapper.appendChild(row);
    nav.appendChild(wrapper);

    return nav;
};

export default composeNavigationStory;

