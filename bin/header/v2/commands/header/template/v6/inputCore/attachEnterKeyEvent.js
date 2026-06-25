const startFunc = (input) => {
    input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;

        event.preventDefault();

        const currentInput = event.currentTarget;

        // const tr = currentInput.closest("body");
        const tr =
            currentInput.closest("form") ||
            currentInput.closest("fieldset") ||
            currentInput.closest("tr") ||
            currentInput.closest("body");

        if (tr) {
            const inputs = [...tr.querySelectorAll("input")];

            const currentIndex = inputs.indexOf(currentInput);

            const nextInput = inputs[currentIndex + 1];
            // console.log("nextInput : ", nextInput);

            if (nextInput) {
                nextInput.focus();
                nextInput.select();
            };
        };
    });
};

export default startFunc;