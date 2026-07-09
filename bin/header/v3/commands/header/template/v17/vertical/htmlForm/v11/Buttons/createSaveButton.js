import defaultOptions from "../defaultOptions.js";

const toggleButtons = ({ inButton }) => {
    const button = inButton;
    const closestButtonsRow = button.closest(".buttonsRow");
    const saveBtn = closestButtonsRow.querySelector(".saveButtonClass");
    const editBtn = closestButtonsRow.querySelector(".editButtonClass");
    const updateBtn = closestButtonsRow.querySelector(".updateButtonClass");
    const cancelBtn = closestButtonsRow.querySelector(".cancelButtonClass");

    button.style.display = "none";
    editBtn.style.display = "";

    const fieldset = closestButtonsRow.closest("form")?.querySelector("fieldset");
    if (fieldset) fieldset.setAttribute("disabled", "true");
};

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

        if (fromService.ok) {
            const fromServiceResponseBody = await fromService.text();

            const fieldset = button.closest("form")?.querySelector("fieldset");
            fieldset.dataset.pk = fromServiceResponseBody;

            inConfig.callbacks.vertical.onSuccess(fromServiceResponseBody);
            // console.log("fromServiceResponseBody : ", fromServiceResponseBody);

            toggleButtons({ inButton: button });
        } else {
            inConfig.callbacks.vertical.onSuccess(false);
        };
    };

    return button;
};
