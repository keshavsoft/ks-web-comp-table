import defaultOptions from "../defaultOptions.js";

const toggleButtons = ({ inButton }) => {
    const button = inButton;

    const closestButtonsRow = button.closest(".buttonsRow");
    const saveBtn = closestButtonsRow.querySelector(".saveButtonClass");
    const editBtn = closestButtonsRow.querySelector(".editButtonClass");
    const updateBtn = closestButtonsRow.querySelector(".updateButtonClass");
    const cancelBtn = closestButtonsRow.querySelector(".cancelButtonClass");

    button.style.display = "none";      // Hides Update button
    cancelBtn.style.display = "none";   // Hides Cancel button
    editBtn.style.display = "";         // Shows Edit button

    const fieldset = closestButtonsRow.closest("form")?.querySelector("fieldset");
    if (fieldset) fieldset.setAttribute("disabled", "true");
};

export const createUpdateButton = ({ options = {}, inServices, inConfig }) => {
    const button = document.createElement("ks-button");
    button.init({
        text: options.updateButtonText || "Update",
        class: options.updateButtonClass || options.uiClasses?.updateButtonClass || options.uiClasses?.buttonRow?.buttons?.update || options.uiClasses?.form?.buttonRow?.buttons?.update || defaultOptions.uiClasses.form.buttonRow.buttons.update
    });

    button.onClick = async (data) => {
        let fromService;

        fromService = await inServices?.actions?.vertical?.update({
            inEndPoint: inConfig?.endPoints?.update,
            payload: data
        });

        if (fromService.ok) {
            toggleButtons({ inButton: button });
        };


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
