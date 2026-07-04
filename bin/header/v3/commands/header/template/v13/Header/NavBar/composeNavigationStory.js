import { readStory } from "./readStory/readStory.js";
import { createLayout } from "./createElements/createLayout.js";
import { createBrand } from "./createElements/createBrand.js";
import { createMenu } from "./createElements/createMenu.js";

const composeNavigationStory = ({ inElement }) => {
    const story = readStory(inElement);

    const { nav, row } = createLayout(story);
    const brand = createBrand(story);
    const { menu, button } = createMenu(story);

    row.append(brand, button, menu);

    return nav;
};

export default composeNavigationStory;



