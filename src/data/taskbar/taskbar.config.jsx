import { programsConfig } from '../programs/programs.config';
import { clockPopupConfig } from './clock.config';
import { searchPopupConfig } from './search.config';
import { startPopupConfig } from './start.config';
import { systemTrayConfig } from './system-tray.config';

export const taskbarConfig = {
    actions: [startPopupConfig, searchPopupConfig],
    programs: programsConfig,
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
