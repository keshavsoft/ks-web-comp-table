const attachClick1 = ({ inButton, item, index, onDeleteFunc }) => {
    inButton.onclick = (event) => {
        const localCurrentTarget = event.currentTarget;

        const closestTr = localCurrentTarget.closest("tr");

        const presentPk = closestTr.dataset.pk;
        console.log("aaaaaaa", presentPk);

    };
};

const attachClick = ({ inButton, item, index, onDeleteFunc }) => {
    inButton.onclick = () => onDeleteFunc?.({ item, index, presentPk: item?.pk });
};

export default attachClick;
