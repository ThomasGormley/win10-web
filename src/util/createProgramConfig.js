export const createProgramConfig = (config) => ({
    shouldOpenWindow: true,
    resizable: true,

    height: 200,
    width: 400,
    taskbar: {
        button: {
            width: 'w-auto',
        },
    },
    ...config,
});
