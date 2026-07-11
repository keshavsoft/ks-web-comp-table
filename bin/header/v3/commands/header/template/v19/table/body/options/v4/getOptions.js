const getDeleteType = (el) => {
    if (el.ksDeleteType) return el.ksDeleteType;

    if (el.hasAttribute("ks-delete-type")) return el.getAttribute("ks-delete-type");
    if (el.hasAttribute("delete-type")) return el.getAttribute("delete-type");

    let parent = el.parentElement;
    while (parent) {
        if (parent.hasAttribute("ks-delete-type")) return parent.getAttribute("ks-delete-type");
        if (parent.hasAttribute("delete-type")) return parent.getAttribute("delete-type");
        parent = parent.parentElement;
    }

    return "both";
};

const getShowEdit = (el, onEditFunc) => {
    if (el.ksShowEdit !== undefined) return el.ksShowEdit;
    if (el.hasAttribute("ks-show-edit")) return el.getAttribute("ks-show-edit") !== "false";
    if (el.hasAttribute("show-edit")) return el.getAttribute("show-edit") !== "false";
    return !!onEditFunc;
};

const getShowDelete = (el, onDeleteFunc) => {
    if (el.ksShowDelete !== undefined) return el.ksShowDelete;
    if (el.hasAttribute("ks-show-delete")) return el.getAttribute("ks-show-delete") !== "false";
    if (el.hasAttribute("show-delete")) return el.getAttribute("show-delete") !== "false";
    return !!onDeleteFunc;
};

const getDeleteIconSize = (el) => {
    if (el.ksDeleteIconSize) return el.ksDeleteIconSize;

    if (el.hasAttribute("ks-delete-icon-size")) return el.getAttribute("ks-delete-icon-size");
    if (el.hasAttribute("delete-icon-size")) return el.getAttribute("delete-icon-size");

    let parent = el.parentElement;
    while (parent) {
        if (parent.hasAttribute("ks-delete-icon-size")) return parent.getAttribute("ks-delete-icon-size");
        if (parent.hasAttribute("delete-icon-size")) return parent.getAttribute("delete-icon-size");
        parent = parent.parentElement;
    }

    return "medium";
};

const getOptions = ({ inElement }) => {
    return {
        item: inElement.ksItem,
        index: inElement.ksIndex,
        onDeleteFunc: inElement.ksOnDeleteFunc,
        onEditFunc: inElement.ksOnEditFunc,
        onUpdateFunc: inElement.ksOnUpdateFunc,
        onShowFunc: inElement.ksOnShowFunc,
        deleteType: getDeleteType(inElement),
        showEdit: getShowEdit(inElement, inElement.ksOnEditFunc),
        showDelete: getShowDelete(inElement, inElement.ksOnDeleteFunc),
        deleteIconSize: getDeleteIconSize(inElement)
    };
};

export default getOptions;
