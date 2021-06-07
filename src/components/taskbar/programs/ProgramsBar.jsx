import { taskbarConfig } from '../../../data/taskbar/taskbar.config';
import TaskbarProgramButton from './TaskbarProgramButton';

const ProgramsBar = () => (
    <div className="flex items-center align-middle">
        {taskbarConfig.programs.map((program) => (
            <TaskbarProgramButton
                key={program.id}
                id={program.id}
                tooltip={program.tooltip}
                width="12.5"
            >
                <img
                    className="object-contain w-auto h-full px-3 py-2"
                    src={`/assets/icons/${program.id}/256.png`}
                    alt={`${program.tooltip} app icon`}
                />
            </TaskbarProgramButton>
        ))}
    </div>
);

export default ProgramsBar;