const findFirstEmptyInput = (inputs) => {
    return inputs.find((input) => {
        const type = input.type?.toLowerCase();

        if (type === "number") {
            const num = Number(input.value);
            return isNaN(num) || num <= 0;
        }

        return input.value.trim() === "";
    });
};

export default findFirstEmptyInput;
