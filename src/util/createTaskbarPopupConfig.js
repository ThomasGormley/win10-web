export const createTaskbarPopupConfig = (config) => ({
    shouldOpenWindow: false,
    placement: 'top-end',
    strategy: 'absolute',
    taskbar: {
        button: {
            width: 'w-[auto]',
        },
    },
    ...config,
});
