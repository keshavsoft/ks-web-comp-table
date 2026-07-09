const applyDefaultValue = ({
    inInput, type
}) => {
    switch (type) {
        case "date":
            const localDate = new Date();
            const year = localDate.getFullYear();
            const month = String(localDate.getMonth() + 1).padStart(2, '0');
            const day = String(localDate.getDate()).padStart(2, '0');
            inInput.value = `${year}-${month}-${day}`;
            break;
        default:
            break;
    }
};

export default applyDefaultValue;
