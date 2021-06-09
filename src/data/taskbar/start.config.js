import { createTaskbarPopupConfig } from '../../util/createTaskbarPopupConfig';
import {
    calendarProgramConfig,
    mailProgramConfig,
    weatherProgramConfig,
    msstoreProgramConfig,
    calculatorProgramConfig,
} from '../programs/index';

export const startPopupConfig = createTaskbarPopupConfig({
    id: 'start',
    tooltip: 'Start',
    placement: 'top-start',

    actions: ['User', 'Documents', 'Pictures', 'Settings', 'Power'],
    tiles: {
        ['My Tiles']: [
            calendarProgramConfig,
            mailProgramConfig,
            calculatorProgramConfig,
            weatherProgramConfig,
            msstoreProgramConfig,
        ],
    },
});
