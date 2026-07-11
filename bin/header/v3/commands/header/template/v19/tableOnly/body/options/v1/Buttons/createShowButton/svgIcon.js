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
        d="M2.036 12.322a1.012 1.012 0 010-1.339c1.69-1.95 3.659-3.233 5.867-4.041A9.043 9.043 0 0112 6.5c2.11 0 4.07.649 5.867 1.847 2.208.808 4.177 2.091 5.867 4.041a1.012 1.012 0 010 1.339c-1.69 1.95-3.659 3.233-5.867 4.041A9.043 9.043 0 0112 17.5c-2.11 0-4.07-.649-5.867-1.847-2.208-.808-4.177-2.091-5.867-4.041z" />
  <path stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
`;
};

export default svgIcon;
