const showClick = ({ event, options }) => {
    options.onShowFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
};

export default showClick;
