const reportInvalidInput = (input) => {
    input.setCustomValidity("Please fill this field.");
    input.reportValidity();
    input.focus();
};

export default reportInvalidInput;
