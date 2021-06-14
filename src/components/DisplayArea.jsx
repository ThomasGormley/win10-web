import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { programsConfig } from '../data/programs/programs.config';
import DesktopShortcut from './DesktopShortcut';
import Window from './Window';

const DisplayArea = () => {
    const processes = useSelector((state) => state.processes);

    const [focusedWindow, setFocusedWindow] = useState('');
    const [focusedWindowZIndex, setFocusedWindowZIndex] = useState(-2);

    useEffect(() => {
        setFocusedWindowZIndex((prev) => prev + 2);
    }, [focusedWindow]);

    return (
        <div className="relative h-full overflow-hidden ">
            <div className="p-2">
                <div className="inline-flex flex-col flex-wrap max-h-[95vh]">
                    {programsConfig.map((config) => (
                        <DesktopShortcut config={config} key={config.id} />
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
