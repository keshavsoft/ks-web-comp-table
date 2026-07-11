export const onClick = (event) => {
    const currentAnchor = event.currentTarget;
    const menu = currentAnchor
        .closest("nav")
        ?.querySelector("#menu");

    // console.log("menu : ", menu, currentAnchor);

    menu?.classList.add("hidden");

    const nav = currentAnchor.closest("nav") || currentAnchor.closest("ks-nav");
    if (nav) {
        const anchors = nav.querySelectorAll("ks-menu-item a");
        anchors.forEach(item => {
            item.classList.remove("bg-blue-600");
            item.classList.add("lg:bg-transparent");
        });
    }

    currentAnchor.classList.add("bg-blue-600");
    currentAnchor.classList.remove("lg:bg-transparent");
};
