import Amount from "./Amount.js";
import qty from "./qty.js";
import rateInclusive from "./rateInclusive.js";
import rate from "./rate.js";
import origRate from "./origRate.js";
import origAmount from "./origAmount.js";

const executeKeyDownType = ({
    currentInput,
    inOnKeyDownType,
    inDefaultRow, closestTagIsTr
}) => {
    let closestControl;

    if (closestTagIsTr) {
        closestControl = currentInput.closest("body");
    };
    // console.log("vvvvvvvvv : ", closestControl, inOnKeyDownType);
    switch (inOnKeyDownType) {
        case "Amount":
            Amount({ currentInput, inClosestControl: closestControl });
            break;

        case "Qty":
            qty({ currentInput, inClosestControl: closestControl });
            break;

        case "OrigRate":
            origRate({ currentInput, inClosestControl: closestControl });
            break;

        case "OrigAmount":
            origAmount({ currentInput, inClosestControl: closestControl });
            break;

        case "RateInc":
            rateInclusive({
                currentInput, inDefaultRow,
                inClosestControl: closestControl
            });

            break;

        case "Rate":
            rate({
                currentInput, inDefaultRow,
                inClosestControl: closestControl
            });

            break;
        default:
            break;
    };
};

export default executeKeyDownType;