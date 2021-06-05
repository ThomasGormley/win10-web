import { match } from '../../../util/match';
import ChevronUpIcon from '../../icons/ChevronUpIcon';
import SearchIcon from '../../icons/SearchIcon';
import StartIcon from '../../icons/StartIcon';
import TaskbarClock from './TaskbarClock';

const DisplayPopupIcon = ({ id }) =>
    match(id, {
        start() {
            return (
                <span className="flex justify-center">
                    <StartIcon className="w-auto h-9 py-2.5 px-4" />
                </span>
            );
        },
        search() {
            return (
                <span className="flex justify-center">
                    <SearchIcon className="w-auto h-9 py-2.5 px-4" />
                </span>
            );
        },
        ['system-tray']() {
            return (
                <span className="flex justify-center">
                    <ChevronUpIcon className="w-[1.2rem] h-[1.2rem] " />
                </span>
            );
        },
        clock() {
            return (
                <span className="flex justify-center">
                    <TaskbarClock />
                </span>
            );
        },
    });

export default DisplayPopupIcon;
