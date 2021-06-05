import TaskbarPopupButton from './TaskbarPopupButton';

// Holds the taskbar buttons that don't open a new window, only a pop up
const PopupsBar = ({ config }) => (
    <div className="flex align-middle">
        {config.map((type) => (
            <TaskbarPopupButton
                key={type.id}
                id={type.id}
                tooltip={type.tooltip}
                width={type.taskbar.button.width}
                placement={type.placement}
            />
        ))}
    </div>
);

export default PopupsBar;
