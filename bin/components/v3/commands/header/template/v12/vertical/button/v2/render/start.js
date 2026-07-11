import { buildButton } from "../BuildButton/buildButton.js";

const renderButton = ({ element, options = {} }) => {
    const text = options.text || options.buttonText || options.inText || element.getAttribute("text") || element.getAttribute("button-text") || "Save";

    const defaultClass = "w-full mt-2 px-4 py-1 bg-green-500 text-white rounded";
    const className = options.class || options.className || options.buttonClass || options.inClass || options.inClassName || element.getAttribute("class") || element.getAttribute("button-class") || defaultClass;

    const button = buildButton({
        inText: text,
        inClass: className
    });

    button.addEventListener("click", event => {
        event.preventDefault();

        const form = element.closest("form");
        const data = form ? Object.fromEntries(
            [...form.querySelectorAll("input")]
                .map(input => [input.name, input.value])
        ) : {};

        element.onClick?.(data);
    });

    element.appendChild(button);
};

export default renderButton;
