import editClick from "./editClick.js";
import cancelClick from "./cancelClick.js";
import updateClick from "./updateClick.js";
import deleteClick from "./deleteClick.js";
import showClick from "./showClick.js";

const hookEvents = ({ editBtn, deleteBtn, updateBtn, cancelBtn, showBtn, options }) => {
    if (editBtn) {
        editBtn.onclick = (event) => {
            editClick({ event, options });
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = (event) => {
            cancelClick({ event });
        };
    }

    if (updateBtn) {
        updateBtn.onclick = (event) => {
            updateClick({ event, options });
        };
    }

    if (deleteBtn) {
        deleteBtn.onclick = (event) => {
            deleteClick({ event, options });
        };
    };

    if (showBtn) {
        // console.log("showBtn ---------------: ", showBtn);

        showBtn.onclick = (event) => {
            showClick({ event, options });
        };
    };
};

export default hookEvents;
