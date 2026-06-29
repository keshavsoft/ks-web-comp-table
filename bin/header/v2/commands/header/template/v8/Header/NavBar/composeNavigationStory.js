import createBrandTitle from "./createBrandTitle.js";
import createMenuList from "./createMenuList.js";
import createMenuToggleButton from "./createMenuToggleButton.js";
import createNavigationBar from "./createNavigationBar.js";
import createNavigationRow from "./createNavigationRow.js";
import createNavigationWrapper from "./createNavigationWrapper.js";
import readNavStoryFromElement from "./readNavStoryFromElement.js";

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
