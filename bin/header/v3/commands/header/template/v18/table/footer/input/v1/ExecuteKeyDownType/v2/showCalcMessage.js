const showCalcMessage = ({
    input,
    message
}) => {
    let messageDiv =
        input.parentElement.querySelector(
            ".calc-message"
        );

    if (!messageDiv) {
        messageDiv =
            document.createElement("div");

        messageDiv.className =
            "calc-message text-xs text-green-600 mt-1";

        input.parentElement.appendChild(
            messageDiv
        );
    }

    messageDiv.textContent = message;

    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
};

export default showCalcMessage;