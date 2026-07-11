export const appendEditButton = ({ form, element }) => {
    const button = document.createElement("ks-button");
    button.init({ text: "Edit", class: "flex-1 px-4 py-1 bg-blue-500 text-white rounded" });

    button.onClick = () => {
        if (element.options && element.options.inVerticalOptions) {
            element.options.inVerticalOptions.isEdit = true;
        }
        element.render();
    };

    form.appendChild(button);
};
