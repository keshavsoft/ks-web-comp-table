const resetCustomValidity = (inputs) => {
    inputs.forEach((input) => input.setCustomValidity(""));
};

export default resetCustomValidity;
