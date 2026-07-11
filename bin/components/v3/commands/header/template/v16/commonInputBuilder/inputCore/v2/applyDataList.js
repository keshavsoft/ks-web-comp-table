const applyDataList = ({
    inInput, inDataListFillName
}) => {
    if (inDataListFillName) inInput.dataset.dataListFillName = inDataListFillName;
};

export default applyDataList;
