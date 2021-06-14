import { startProcess, stopProcess } from './processes.slice';
import { addProgramToTaskbar, removeProgramFromTaskbar } from './taskbar.slice';

export const handleStartProcess = (dispatch, config) => {
    const { id, shouldOpenWindow, externalAction, isPinnedToTaskbar } = config;

    if (!shouldOpenWindow) return externalAction();

    if (!isPinnedToTaskbar) dispatch(addProgramToTaskbar(config));

    dispatch(startProcess(id));
};

export const handleStopProcess = (dispatch, config) => {
    const { id, isPinnedToTaskbar } = config;

    if (!isPinnedToTaskbar) dispatch(removeProgramFromTaskbar(id));

    dispatch(stopProcess(id));
};
