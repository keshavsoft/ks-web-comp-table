import svgIcon from "./svgIcon.js";

const setContent = ({ inButton, deleteType, deleteIconSize }) => {
    const typeNormalized = String(deleteType || "").toLowerCase();

    if (typeNormalized === "text" || typeNormalized === "onlytext" || typeNormalized === "1") {
        inButton.textContent = "Delete";
        return;
    }

    if (typeNormalized === "icon" || typeNormalized === "onlyicon" || typeNormalized === "2") {
        inButton.innerHTML = svgIcon({ withMargin: false, size: deleteIconSize });
        return;
    }

    inButton.innerHTML = `${svgIcon({ withMargin: true, size: deleteIconSize })}Delete`;
};

export default setContent;
