import getColumnConfig from "./getColumnConfig.js";

const applyDataList = ({
    inInput,
    inName,
    inShowDataList,
    inColumnsConfig
}) => {
    const localColumnConfig =
        getColumnConfig({
            inColumnsConfig,
            inName
        });

    if (!inShowDataList) return;
    if (!localColumnConfig?.tableFooterDataListShow) return;

    inInput.setAttribute("list", `${inName}List`);
    inInput.dataset.dataListSource =
        localColumnConfig.dataListSource;
};

export default applyDataList;
