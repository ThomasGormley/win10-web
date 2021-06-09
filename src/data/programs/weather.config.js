import { createProgramConfig } from '../../util/createProgramConfig';

export const weatherProgramConfig = createProgramConfig({
    id: 'weather',
    tooltip: 'Weather',
    title: 'Weather',

    tile: {
        'col-span': 2,
    },
});
