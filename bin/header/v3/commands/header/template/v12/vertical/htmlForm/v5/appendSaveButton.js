export const appendSaveButton = ({ form, inServices, inConfig }) => {
    const button = document.createElement("ks-button");
    button.init({ 
        text: "Save",
        class: "flex-1 px-4 py-1 bg-green-500 text-white rounded"
    });

    button.onClick = async (data) => {
        const fromService = await inServices.actionsFetchOnly.create({
            inEndPoint: inConfig.endPoints.create,
            payload: data
        });

        inConfig.callbacks.vertical.onSuccess(fromService);
    };

    form.appendChild(button);
};
