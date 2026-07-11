export const appendCancelButton = ({ form, element }) => {
    const button = document.createElement("ks-button");
    button.init({ text: "Cancel", class: "flex-1 px-4 py-1 bg-red-500 text-white rounded" });

    button.onClick = () => {
        element.options.isEdit = false;
        element.render();
    };

    form.appendChild(button);
};
