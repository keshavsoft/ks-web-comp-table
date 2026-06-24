const getColumnConfig = ({
    inColumnsConfig,
    inName
}) => {
    return inColumnsConfig.find(
        localColumn => localColumn.columnName === inName
    );
};

export default getColumnConfig;
