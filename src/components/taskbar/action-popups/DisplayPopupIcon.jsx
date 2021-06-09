import { match } from '../../../util/match';
import { ChevronUpIcon } from '../../icons/';
import SearchIcon from '../../icons/SearchIcon';
import StartIcon from '../../icons/StartIcon';
import TaskbarClock from '../action-popups/clock/TaskbarClock';

const DisplayPopupIcon = ({ id }) =>
    match(id, {
        start() {
            return <StartIcon className="w-auto h-9 py-2.5 px-4" />;
        },
        search() {
            return <SearchIcon className="w-auto h-9 py-2.5 px-4" />;
        },
        ['system-tray']() {
            return <ChevronUpIcon className="w-[1.2rem] h-[1.2rem] " />;
        },
        clock() {
            return <TaskbarClock />;
        },
    });

export default DisplayPopupIcon;
