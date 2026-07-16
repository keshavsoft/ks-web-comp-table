export const createChevron = (chevronDivClass) => {
    const chevronDiv = document.createElement("div");
    chevronDiv.className = chevronDivClass || "";
    chevronDiv.innerHTML = `
        <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    `;
    return chevronDiv;
};
