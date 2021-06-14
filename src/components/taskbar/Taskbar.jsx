import { taskbarConfig } from '../../data/taskbar/taskbar.config';
import PopupActions from './action-popups/PopupsBar';
import ProgramsBar from './programs/ProgramsBar';

const Taskbar = () => (
    <div className="h-10 bg-black bg-opacity-75" id="taskbar">
        <div className="flex flex-row justify-between h-full">
            <div className="flex space-x-1">
                {/* Start & Search actions */}
                <PopupActions config={taskbarConfig.actions} />
                <ProgramsBar />
            </div>

            <div className="flex space-x-[0.07rem]">
                <PopupActions config={taskbarConfig['system-tray']} />
                <PopupActions config={taskbarConfig.clock} />
                <PopupActions config={taskbarConfig.notifications} />
                <button
                    type="button"
                    aria-disabled
                    className="w-1 ml-6 border-l border-gray-500 cursor-default hover:bg-white hover:bg-opacity-25"
                />
            </div>
        </div>
    </div>
);

export default Taskbar;
