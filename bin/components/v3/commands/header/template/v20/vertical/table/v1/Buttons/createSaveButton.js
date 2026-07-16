import defaultOptions from "../defaultOptions.js";

export const createSaveButton = ({ options = {}, inServices, inConfig }) => {
    const button = document.createElement("ks-button");
    button.init({ 
        text: options.saveButtonText || "Save",
        class: options.saveButtonClass || options.uiClasses?.saveButtonClass || options.uiClasses?.buttonRow?.buttons?.save || options.uiClasses?.form?.buttonRow?.buttons?.save || defaultOptions.uiClasses.form.buttonRow.buttons.save
    });

    button.onClick = async (data) => {
        const fromService = await inServices.actionsFetchOnly.create({
            inEndPoint: inConfig.endPoints.create,
            payload: data
        });

        inConfig.callbacks.vertical.onSuccess(fromService);
    };

    return button;
};
