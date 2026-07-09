const showClick = ({ event, options }) => {
    // console.log("showClick eeeeeeeeeeeeeeee: ", event, options);

    options.onShowFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
};

export default showClick;
