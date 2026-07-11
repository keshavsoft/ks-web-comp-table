export const createCancelButton = ({ element }) => {
    const button = document.createElement("ks-button");
    button.init({ text: "Cancel", class: "flex-1 px-4 py-1 bg-red-500 text-white rounded" });

    button.onClick = () => {
        if (element.options && element.options.inVerticalOptions) {
            element.options.inVerticalOptions.isEdit = false;
        }
        element.render();
    };

    return button;
};
