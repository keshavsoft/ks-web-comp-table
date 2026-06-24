const attachChangeEvent = ({
    input, onChangeType,
    onChangeFunc
}) => {
    if (!onChangeFunc) return;

    input.addEventListener(
        "change",
        (event) => {
            const localCurrentTarget =
                event.currentTarget;

            onChangeFunc({
                inCurrentTarget: localCurrentTarget,
                inChangeType: onChangeType
            });
        }
    );
};

export default attachChangeEvent;