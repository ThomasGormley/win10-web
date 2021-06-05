export const createTaskbarPopupConfig = (config) => ({
    shouldOpenWindow: false,
    placement: 'top-end',
    taskbar: {
        button: {
            width: 'w-[auto]',
        },
    },
    ...config,
});
