import { useSelector } from 'react-redux';
import { programsConfig } from '../data/programs/programs.config';
import Window from './Window';

const DisplayArea = () => {
    const processes = useSelector((state) => state.processes);
    return (
        <div className="relative flex-1">
            {Object.keys(processes).map((process) => {
                if (!processes[process]) return;

                const openedProcess = programsConfig.find(
                    (program) => program.id === process,
                );

                console.log(openedProcess);

                return <Window key={process} program={openedProcess} />;
            })}
        </div>
    );
};

export default DisplayArea;
