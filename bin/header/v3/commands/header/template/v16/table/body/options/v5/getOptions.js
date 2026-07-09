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

const getShowEdit = ({ inElement, inOnEditFunc, inClosestBody }) => {
    // console.log("aaaaaaaa : ", inElement, inClosestBody);

    if (inClosestBody.hasAttribute("ks-show-edit")) return inClosestBody.getAttribute("ks-show-edit") !== "false";
    if (inElement.ksShowEdit !== undefined) return inElement.ksShowEdit;
    if (inElement.hasAttribute("ks-show-edit")) return inElement.getAttribute("ks-show-edit") !== "false";
    if (inElement.hasAttribute("show-edit")) return inElement.getAttribute("show-edit") !== "false";
    return !!inOnEditFunc;
};

const getShowShow = ({ inElement, inOnEditFunc, inClosestBody }) => {
    // console.log("aaaaaaaa : ", inClosestBody.hasAttribute("ks-showshow"));

    if (inClosestBody && inClosestBody.hasAttribute("ks-showshow")) return inClosestBody.getAttribute("ks-showshow") !== "false";
    if (inElement.ksShowEdit !== undefined) return inElement.ksShowEdit;
    if (inElement.hasAttribute("ks-show-edit")) return inElement.getAttribute("ks-show-edit") !== "false";
    if (inElement.hasAttribute("show-edit")) return inElement.getAttribute("show-edit") !== "false";
    return !!inOnEditFunc;
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

const getOptions = ({ inElement, inClosestBody }) => {
    return {
        item: inElement.ksItem,
        index: inElement.ksIndex,
        onDeleteFunc: inElement.ksOnDeleteFunc,
        onEditFunc: inElement.ksOnEditFunc,
        onUpdateFunc: inElement.ksOnUpdateFunc,
        onShowFunc: inElement.ksOnShowFunc,
        deleteType: getDeleteType(inElement),
        showEdit: getShowEdit({
            inElement, inOnEditFunc: inElement.ksOnEditFunc,
            inClosestBody
        }),
        showDelete: getShowDelete(inElement, inElement.ksOnDeleteFunc),
        deleteIconSize: getDeleteIconSize(inElement),
        showShow: getShowShow({
            inElement, inOnEditFunc: inElement.ksOnEditFunc,
            inClosestBody
        })
    };
};

export default getOptions;
