import { programsConfig } from '../programs';
import {
    clockPopupConfig,
    searchPopupConfig,
    startPopupConfig,
    systemTrayConfig,
} from './index';

export const taskbarConfig = {
    actions: [startPopupConfig, searchPopupConfig],

    programs: programsConfig.filter((programs) => programs.isPinnedToTaskbar),

    'system-tray': [systemTrayConfig],

    clock: [clockPopupConfig],

    notifications: {
        'show-hidden': 'show',
        network: 'network',
    },

    desktop: {
        'show-hidden': 'show',
        network: 'network',
    },
};
