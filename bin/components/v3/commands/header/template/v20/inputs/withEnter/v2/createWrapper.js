const createWrapper = ({ inRowClass }) => {
    const wrapper = document.createElement("div");

    // wrapper.className = inRowClass || "flex items-center space-x-4";
    if (inRowClass) wrapper.className = inRowClass;

    return wrapper;
};

export default createWrapper;
