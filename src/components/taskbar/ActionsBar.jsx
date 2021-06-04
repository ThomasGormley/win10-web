import { taskbarConfig } from '../../data/taskbar/taskbar.config';
import TaskbarButton from './TaskbarButton';

const ActionsBar = () => (
    <div className="flex align-middle">
        {Object.keys(taskbarConfig.actions).map((actionID) => (
            <TaskbarButton
                key={actionID}
                start={actionID === 'start'}
                tooltip={taskbarConfig.actions[actionID].tooltip}
                width="12.5"
            >
                {taskbarConfig.actions[actionID].icon}
            </TaskbarButton>
        ))}
    </div>
);

export default ActionsBar;
