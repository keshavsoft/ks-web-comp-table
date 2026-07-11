const findDataListRecord = ({
    inputValue,
    dataStore,
    dataListSource
}) => {
    if (!dataListSource || !dataStore) return;

    const [dataListName, matchKey] = dataListSource.split(".");

    if (!dataListName || !matchKey) return;

    const dataListArray = dataStore.getDataList(dataListName) || [];

    return dataListArray.find(element => {
        return element[matchKey] === inputValue;
    });
};

export default findDataListRecord;
