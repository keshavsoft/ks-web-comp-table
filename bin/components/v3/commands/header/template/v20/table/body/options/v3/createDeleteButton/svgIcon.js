const sizeMap = {
    sm: "w-3 h-3",
    small: "w-3 h-3",
    md: "w-4 h-4",
    medium: "w-4 h-4",
    lg: "w-5 h-5",
    large: "w-5 h-5",
    xl: "w-6 h-6",
    "extra-large": "w-6 h-6"
};

const svgIcon = ({ withMargin = true, size = "medium" } = {}) => {
    const marginClass = withMargin ? " mr-1" : "";
    const sizeNormalized = String(size || "").toLowerCase();
    const sizeClass = sizeMap[sizeNormalized] || "w-4 h-4";

    return `
<svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     class="inline ${sizeClass}${marginClass}">
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 7.5h12m-9 0V6a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 6v1.5m-7.5 0v10.125A2.625 2.625 0 0010.125 20.25h3.75A2.625 2.625 0 0016.5 17.625V7.5M9.75 10.5v6m4.5-6v6" />
</svg>
`;
};

export default svgIcon;
