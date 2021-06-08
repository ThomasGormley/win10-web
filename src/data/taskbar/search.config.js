import { createTaskbarPopupConfig } from '../../util/createTaskbarPopupConfig';

export const searchPopupConfig = createTaskbarPopupConfig({
    id: 'search',
    tooltip: 'Type here to search',

    'quick-searches': ['Weather', 'Top news', 'Today in history', 'Pictures'],
});
