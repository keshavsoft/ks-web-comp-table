import defaultOptions from "../defaultOptions.js";

export const createUpdateButton = ({ options = {}, inServices, inConfig }) => {
    const button = document.createElement("ks-button");
    button.init({
        text: options.updateButtonText || "Update",
        class: options.updateButtonClass || options.uiClasses?.updateButtonClass || options.uiClasses?.buttonRow?.buttons?.update || options.uiClasses?.form?.buttonRow?.buttons?.update || defaultOptions.uiClasses.form.buttonRow.buttons.update
    });


    button.onClick = async (data) => {
        let fromService;
        console.log("data------------ : ", data, options);
        // if (inServices?.actionsFetchOnly?.update) {
        //     fromService = await inServices.actionsFetchOnly.update({
        //         inEndPoint: inConfig.endPoints.update,
        //         payload: data
        //     });
        // } else if (inServices?.actions?.update) {
        //     fromService = await inServices.actions.update({
        //         inEndPoint: inConfig.endPoints.update,
        //         payload: data
        //     });
        // } else {
        //     fromService = await inServices.actionsFetchOnly.create({
        //         inEndPoint: inConfig.endPoints.update || inConfig.endPoints.create,
        //         payload: data
        //     });
        // }

        // inConfig.callbacks.vertical.onSuccess(fromService);
    };

    return button;
};
