import { Popover } from '@headlessui/react';
import { taskbarConfig } from '../../../data/taskbar/taskbar.config';

const SystemTrayMenu = () => (
    <div className="grid items-center content-center grid-cols-3 p-[1px] justify-items-center">
        {taskbarConfig.programs.map((program, i) => (
            <Popover.Button
                key={program.id + i}
                className="p-3 transition duration-150 hover:bg-white hover:bg-opacity-20"
            >
                <span>
                    <img
                        className="items-center object-contain w-4 h-4"
                        src={`/assets/icons/${program.id}/256.png`}
                        alt={`${program.tooltip} app icon`}
                    />
                </span>
            </Popover.Button>
        ))}
    </div>
);

export default SystemTrayMenu;
