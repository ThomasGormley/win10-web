import { createProgramConfig } from '../../util/createProgramConfig';

export const vscodeProgramConfig = createProgramConfig({
    id: 'vscode',
    tooltip: 'Visual Studio Code',
    title: 'Visual Studio Code',
    isPinnedToTaskbar: true,

    height: 600,
    width: 800,

    window: {
        menu: [
            'File',
            'Edit',
            'Selection',
            'View',
            'Go',
            'Run',
            'Terminal',
            'Help',
        ],
    },
});
