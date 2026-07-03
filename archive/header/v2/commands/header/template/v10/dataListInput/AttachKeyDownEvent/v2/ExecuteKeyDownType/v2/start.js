import Amount from "./Amount.js";
import qty from "./qty.js";
import rateInclusive from "./rateInclusive.js";
import rate from "./rate.js";

const executeKeyDownType = ({
    currentInput,
    inOnKeyDownType,
    inDefaultRow
}) => {
    switch (inOnKeyDownType) {
        case "Amount":
            Amount({ currentInput });
            break;

        case "Qty":
            qty({ currentInput });
            break;

        case "RateInc":
            rateInclusive({ currentInput, inDefaultRow });

            break;

        case "Rate":
            rate({ currentInput, inDefaultRow });

            break;
        default:
            break;
    };
};

export default executeKeyDownType;