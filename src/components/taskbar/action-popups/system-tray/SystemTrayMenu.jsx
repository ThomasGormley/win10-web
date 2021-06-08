import { Popover } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { taskbarConfig } from '../../../../data/taskbar/taskbar.config';
import { startProcess, stopProcess } from '../../../../stores/processes.slice';

const SystemTrayMenu = () => {
    const dispatch = useDispatch();
    const processes = useSelector((state) => state.processes);

    return (
        <div className="grid items-center content-center grid-cols-3 p-[1px] justify-items-center">
            {taskbarConfig.programs.map(({ id, tooltip }) => {
                const processIsRunning = processes[id];

                const handleStartProcess = () => {
                    console.log(`processIsRunning`, processIsRunning);
                    if (processIsRunning) {
                        dispatch(stopProcess(id));
                    } else {
                        dispatch(startProcess(id));
                    }
                };

                return (
                    <button
                        onClick={() => handleStartProcess()}
                        key={id}
                        className="p-3 transition duration-150 hover:bg-white hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100"
                    >
                        <span>
                            <img
                                className="items-center object-contain w-4 h-4"
                                src={`/assets/icons/${id}/256.png`}
                                alt={`${tooltip} app icon`}
                            />
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default SystemTrayMenu;
