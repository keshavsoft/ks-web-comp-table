import getColumnConfig from "./getColumnConfig.js";

const applyDataList = ({
    inInput,
    inName,
    inDataListSource
}) => {
    if (!inDataListSource) return;

    inInput.setAttribute("list", `${inName}List`);

    inInput.dataset.dataListSource = inDataListSource;
};

export default applyDataList;
