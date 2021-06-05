export const createProgramConfig = (config) => ({
    shouldOpenWindow: true,
    resizable: true,
    taskbar: {
        button: {
            width: 'w-auto',
        },
    },
    ...config,
});
