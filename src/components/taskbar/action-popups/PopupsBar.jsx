import TaskbarPopupButton from './TaskbarPopupButton';

// Holds the taskbar buttons that don't open a new window, only a pop up
const PopupsBar = ({ config }) => (
    <div className="flex align-middle">
        {config.map((config) => (
            <TaskbarPopupButton key={config.id} config={config} />
        ))}
    </div>
);

export default PopupsBar;
