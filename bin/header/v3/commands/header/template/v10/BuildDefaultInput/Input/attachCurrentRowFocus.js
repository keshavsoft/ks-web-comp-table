const attachCurrentRowFocus = ({ input }) => {
    input.addEventListener("focus", e =>
        e.currentTarget.closest(".flex")?.classList.add("currentRow")
    );

    input.addEventListener("blur", e =>
        e.currentTarget.closest(".flex")?.classList.remove("currentRow")
    );
};

export default attachCurrentRowFocus;
