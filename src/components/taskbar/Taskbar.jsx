import ActionsBar from './ActionsBar';
import ProgramsBar from './ProgramsBar';

const Taskbar = () => (
    <div className="h-10 bg-black bg-opacity-75">
        <div className="flex flex-row h-full">
            <div className="flex space-x-1">
                <ActionsBar />
                <ProgramsBar />
            </div>
        </div>
    </div>
);

export default Taskbar;
