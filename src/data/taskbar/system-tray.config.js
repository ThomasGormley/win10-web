import { createTaskbarPopupConfig } from '../../util/createTaskbarPopupConfig';

export const systemTrayConfig = createTaskbarPopupConfig({
    id: 'system-tray',
    tooltip: 'Show hidden icons',
    placement: 'auto',
    taskbar: {
        button: {
            width: 'w-[26px]',
        },
    },
});
