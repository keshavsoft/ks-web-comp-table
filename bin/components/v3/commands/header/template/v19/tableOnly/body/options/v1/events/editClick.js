const showClick = ({ event, options }) => {
    console.log("options : ", options);


    options.onEditFunc?.({ item: options.item, index: options.index, presentPk: options.item?.pk });
};

export default showClick;
