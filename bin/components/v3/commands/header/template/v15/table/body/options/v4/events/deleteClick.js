const deleteClick = ({ event, options }) => {
    options.onDeleteFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
};

export default deleteClick;
