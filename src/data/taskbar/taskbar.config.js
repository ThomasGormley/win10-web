import {
    chromeProgramConfig,
    explorerProgramConfig,
    spotifyProgramConfig,
    vscodeProgramConfig,
    bashProgramConfig,
} from '../programs';
import {
    clockPopupConfig,
    searchPopupConfig,
    startPopupConfig,
    systemTrayConfig,
} from './index';

export const taskbarConfig = {
    actions: [startPopupConfig, searchPopupConfig],

    programs: [
        bashProgramConfig,
        explorerProgramConfig,
        spotifyProgramConfig,
        vscodeProgramConfig,
        chromeProgramConfig,
    ],

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
