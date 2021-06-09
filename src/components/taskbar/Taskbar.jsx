import { taskbarConfig } from '../../data/taskbar/taskbar.config';
import PopupActions from './action-popups/PopupsBar';
import ProgramsBar from './programs/ProgramsBar';

const Taskbar = () => (
    <div className="h-10 bg-black bg-opacity-75">
        <div className="flex flex-row justify-between h-full">
            <div className="flex space-x-1">
                {/* Start & Search actions */}
                <PopupActions config={taskbarConfig.actions} />
                <ProgramsBar />
            </div>

            <div className="flex space-x-[0.07rem]">
                <PopupActions config={taskbarConfig['system-tray']} />
                <PopupActions config={taskbarConfig.clock} />
            </div>
        </div>
    </div>
);

export default Taskbar;
