export const createProgramConfig = (config) => ({
    shouldOpenWindow: true,
    resizable: true,

    height: 400,
    width: 600,
    minHeight: 250,
    minWidth: 300,

    taskbar: {
        button: {
            width: 'w-auto',
        },
    },

    tile: {
        'col-span': 1,
        'row-span': 1,
    },
    ...config,
});
