export const defaultOptionsSingleLine = {
    uiClasses: {
        form: {
            class: 'flex flex-row items-center gap-4',
            fieldset: {
                class: 'grid grid-cols-3 gap-x-8 gap-y-4 p-2 verticalForm'
            },
            buttonRow: {
                class: 'flex gap-2 self-center',
                buttons: {
                    save: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    update: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    edit: 'flex-1 px-4 py-1 bg-blue-500 text-white rounded',
                    cancel: 'flex-1 px-4 py-1 bg-red-500 text-white rounded'
                }
            }
        }
    }
};

export const defaultOptionsTwoLines = {
    uiClasses: {
        form: {
            class: 'flex flex-col gap-4',
            fieldset: {
                class: 'grid grid-cols-3 gap-x-8 gap-y-4 p-2 verticalForm'
            },
            buttonRow: {
                class: 'flex gap-2 self-center',
                buttons: {
                    save: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    update: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    edit: 'flex-1 px-4 py-1 bg-blue-500 text-white rounded',
                    cancel: 'flex-1 px-4 py-1 bg-red-500 text-white rounded'
                }
            }
        }
    }
};

export const defaultOptionsInputInline = {
    uiClasses: {
        form: {
            class: 'flex flex-col gap-4',
            fieldset: {
                class: 'grid grid-cols-1 gap-x-8 gap-y-4 p-2 verticalForm'
            },
            buttonRow: {
                class: 'flex gap-2 self-center',
                buttons: {
                    save: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    update: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    edit: 'flex-1 px-4 py-1 bg-blue-500 text-white rounded',
                    cancel: 'flex-1 px-4 py-1 bg-red-500 text-white rounded'
                }
            }
        }
    }
};

export const defaultOptionsInputsStacked = {
    uiClasses: {
        form: {
            class: 'flex flex-col gap-4',
            fieldset: {
                class1: 'grid grid-cols-1 gap-x-8 gap-y-4 p-2 verticalForm [&_ks-input>div]:flex-col [&_ks-input>div]:items-start [&_ks-input>div]:space-x-0 [&_ks-input>div]:gap-1 [&_ks-datalist-input>div]:flex-col [&_ks-datalist-input>div]:items-start [&_ks-datalist-input>div]:space-x-0 [&_ks-datalist-input>div]:gap-1 [&_label]:w-full [&_label]:text-left',
                class: 'grid grid-cols-1 gap-x-8 gap-y-4 p-2 verticalForm'

            },
            buttonRow: {
                class: 'flex gap-2 self-center',
                buttons: {
                    save: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    update: 'flex-1 px-4 py-1 bg-green-500 text-white rounded',
                    edit: 'flex-1 px-4 py-1 bg-blue-500 text-white rounded',
                    cancel: 'flex-1 px-4 py-1 bg-red-500 text-white rounded'
                }
            }
        }
    }
};

export const defaultOptions = defaultOptionsInputInline;

export default defaultOptions;
