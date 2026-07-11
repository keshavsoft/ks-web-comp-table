const executeKeyDownType = ({
    currentInput,
    inOnKeyDownType
}) => {
    const closestTr = currentInput.closest("tr");

    switch (inOnKeyDownType) {
        case "Amount":
            const qty = Number(
                closestTr.querySelector('[name="Qty"]').value
            );

            const amount = Number(
                closestTr.querySelector('[name="Amount"]').value
            );

            closestTr.querySelector('[name="Rate"]').value =
                qty ? amount / qty : 0;

            break;

        default:
            break;
    }
};

export default executeKeyDownType;