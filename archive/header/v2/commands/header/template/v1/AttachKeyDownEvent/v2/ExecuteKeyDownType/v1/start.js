import Amount from "./Amount.js";
import qty from "./qty.js";

const executeKeyDownType = ({
    currentInput,
    inOnKeyDownType
}) => {
    // console.log("inOnKeyDownType : ", inOnKeyDownType);

    switch (inOnKeyDownType) {
        case "Amount":
            Amount({ currentInput });
            break;

        case "Qty":
            qty({ currentInput });
            break;

        default:
            break;
    };
};

export default executeKeyDownType;