import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsConfig } from '../data/programs/programs.config';
import { toggleProcess } from '../stores/processes.slice';
import Window from './Window';

const DisplayArea = () => {
    const processes = useSelector((state) => state.processes);
    const [focusedWindow, setFocusedWindow] = useState('');
    const [focusedWindowZIndex, setFocusedWindowZIndex] = useState(-2);

    useEffect(() => {
        setFocusedWindowZIndex((prev) => prev + 2);
    }, [focusedWindow]);

    const dispatch = useDispatch();

    return (
        <div className="relative flex-1 overflow-y-hidden">
            <div className="p-2">
                <div className="grid grid-cols-1 gap-1 max-h-[95vh]">
                    {programsConfig.map(({ id, title }) => (
                        <button
                            key={id}
                            onClick={() => dispatch(toggleProcess(id))}
                            className="flex flex-col items-center justify-center w-20 h-20 pb-4 text-gray-100 focus:outline-none overflow-ellipsis"
                        >
                            <img
                                className="object-contain w-8 h-8 "
                                src={`/assets/icons/${id}/256.png`}
                                alt={`${title} program icon`}
                            />
                            <span
                                className="mt-1 text-xs"
                                style={{
                                    textShadow: '0px 1px 5px rgba(0,0,0,0.7)',
                                }}
                            >
                                {title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Processes Window Rendering */}
            {Object.keys(processes).map((process) => {
                // if the process is off (false), don't render
                if (!processes[process]) return;

                // collect the config for the running process
                const runningProcess = programsConfig.find(
                    (program) => program.id === process,
                );

                return (
                    <Window
                        key={process}
                        program={runningProcess}
                        windowIsFocused={focusedWindow === runningProcess.id}
                        setWindowIsFocused={setFocusedWindow}
                        focusedWindowZIndex={focusedWindowZIndex}
                    />
                );
            })}
        </div>
    );
};

export default DisplayArea;
