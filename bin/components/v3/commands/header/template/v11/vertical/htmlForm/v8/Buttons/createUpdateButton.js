export const createUpdateButton = ({ inServices, inConfig }) => {
    const button = document.createElement("ks-button");
    button.init({ 
        text: "Update",
        class: "flex-1 px-4 py-1 bg-green-500 text-white rounded"
    });

    button.onClick = async (data) => {
        let fromService;
        if (inServices?.actionsFetchOnly?.update) {
            fromService = await inServices.actionsFetchOnly.update({
                inEndPoint: inConfig.endPoints.update,
                payload: data
            });
        } else if (inServices?.actions?.update) {
            fromService = await inServices.actions.update({
                inEndPoint: inConfig.endPoints.update,
                payload: data
            });
        } else {
            fromService = await inServices.actionsFetchOnly.create({
                inEndPoint: inConfig.endPoints.update || inConfig.endPoints.create,
                payload: data
            });
        }

        inConfig.callbacks.vertical.onSuccess(fromService);
    };

    return button;
};
