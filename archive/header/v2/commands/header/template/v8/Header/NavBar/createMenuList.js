const createMenuList = ({ inClassName, inExtraClass }) => {
    const menu = document.createElement("ul");

    menu.id = "menu";
    menu.className = `${inClassName} ${inExtraClass || ""}`;

    return menu;
};

export default createMenuList;
