const focusNextInput = ({ currentInput }) => {
    const allInputs = [
        ...currentInput
            .closest("tr")
            .querySelectorAll("input")
    ];

    const index = allInputs.indexOf(currentInput);

    if (
        index !== -1 &&
        index < allInputs.length - 1
    ) {
        allInputs[index + 1].focus();
    }
};

export default focusNextInput;