import { useSelector } from 'react-redux';
import { programsConfig } from '../data/programs/programs.config';
import Window from './Window';

const DisplayArea = () => {
    const processes = useSelector((state) => state.processes);
    return (
        <div className="relative flex-1 text-xs">
            <pre>{JSON.stringify(processes, null, 2)}</pre>

            {Object.keys(processes).map((process) => {
                if (!processes[process]) return;

                const openedProcess = programsConfig.find(
                    (program) => program.id === process,
                );

                return <Window key={process} programConfig={openedProcess} />;
            })}
        </div>
    );
};

export default DisplayArea;
