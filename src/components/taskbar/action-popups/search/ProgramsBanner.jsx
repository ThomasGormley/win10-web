import { useDispatch, useSelector } from 'react-redux';
import { startProcess, stopProcess } from '../../../../stores/processes.slice';

const ProgramsBanner = ({ programs }) => {
    const dispatch = useDispatch();
    const processes = useSelector((state) => state.processes);

    return (
        <div className="grid grid-cols-5 gap-1 mt-2">
            {programs.slice(0, 5).map(({ id, tooltip }) => {
                const processIsRunning = processes[id];

                const handleStartProcess = () => {
                    if (processIsRunning) {
                        dispatch(stopProcess(id));
                    } else {
                        dispatch(startProcess(id));
                    }
                };

                return (
                    <button
                        type="button"
                        onClick={() => handleStartProcess()}
                        key={id}
                        className="flex flex-col items-center justify-center w-auto h-auto px-3 py-4 space-y-1 bg-gray-600 rounded bg-opacity-70"
                    >
                        <img
                            className="object-contain w-8 h-8"
                            src={`/assets/icons/${id}/256.png`}
                            alt={`${tooltip} app icon`}
                        />
                        <span className="text-sm">{tooltip}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default ProgramsBanner;
