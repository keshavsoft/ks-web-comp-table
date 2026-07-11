const attachClickEvent = (button, inTagName = "ks-button") => {
    button.addEventListener("click", event => {
        event.preventDefault();

        const ksButton = event.currentTarget.closest(inTagName);
        if (!ksButton) return;

        const form = ksButton.closest("form");
        const data = form ? Object.fromEntries(
            [...form.querySelectorAll("input")]
                .map(input => [input.name, input.value])
        ) : {};

        ksButton.onClick?.(data);
    });
};

export default attachClickEvent;
