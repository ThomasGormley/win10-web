import { createProgramConfig } from '../../util/createProgramConfig';

export const githubProgramConfig = createProgramConfig({
    shouldOpenWindow: false,

    id: 'github',
    tooltip: 'View the GitHub project',
    title: 'GitHub',
    externalAction: () =>
        window.open('https://github.com/ThomasGormley/win10-web', '_blank'),
});
