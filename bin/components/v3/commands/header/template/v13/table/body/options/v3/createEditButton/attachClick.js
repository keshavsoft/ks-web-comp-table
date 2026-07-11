import startFunc from "./start.js";

const attachClick = ({ inButton, item, index, onEditFunc }) => {
    inButton.onclick = (event) => {
        startFunc({
            event,
            item,
            index,
            onEditFunc
        });
    };
};
export default attachClick;
