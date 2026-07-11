export const appendSaveButton = ({ form, inServices, inConfig }) => {
    const button = document.createElement("ks-button");

    button.onClick = async (data) => {
        const fromService = await inServices.actionsFetchOnly.create({
            inEndPoint: inConfig.endPoints.create,
            payload: data
        });

        inConfig.callbacks.vertical.onSuccess(fromService);
    };

    form.appendChild(button);
};
