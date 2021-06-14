import { createTaskbarPopupConfig } from '../../util/createTaskbarPopupConfig';

export const notificationsPopupConfig = createTaskbarPopupConfig({
    id: 'notifications',
    tooltip: 'No new notifications',
    placement: 'right-end',
    strategy: 'fixed',

    actions: ['Connect', 'Network', 'All settings', 'Location'],
});
