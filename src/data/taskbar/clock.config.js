import { createTaskbarPopupConfig } from '../../util/createTaskbarPopupConfig';

export const clockPopupConfig = createTaskbarPopupConfig({
    id: 'clock',
    tooltip: new Date().getDate().toLocaleString(),
    placement: 'top-start',
    taskbar: {
        button: {
            width: 'w-auto',
        },
    },
});
