import { readStory } from "./readStory.js";
import { createLayout, createBrand, createMenu } from "./createElements.js";

const composeNavigationStory = ({ inElement }) => {
    const story = readStory(inElement);

    const { nav, row } = createLayout(story);
    const brand = createBrand(story);
    const { menu, button } = createMenu(story);

    row.append(brand, button, menu);

    return nav;
};

export default composeNavigationStory;


