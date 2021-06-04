import clsx from 'clsx';
import { useState } from 'react';
import { programsConfig } from '../../data/programs/programs.config';
const TaskbarButton = ({ children, start, tooltip = '', width, id }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const isOpen = false;
    const isProgram = programsConfig.some((program) => program.id === id);
    return (
        <button
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onFocus={() => setMouseOver(true)}
            onBlur={() => setMouseOver(false)}
            type="button"
            title={tooltip}
            className={clsx(
                { [`w-[${width}]`]: width },
                'h-10',
                'cursor-default',
                'transition',
                'duration-150',
                'hover:bg-white',
                'hover:bg-opacity-25',
                'text-white',
                'focus:ring-2',
                'focus:ring-inset',
                'focus:ring-white',
                'focus:outline-none',
                { 'hover:text-[#00ADEF]': start },
                'relative',
            )}
            // className={`
            // ${start ? 'hover:text-[#00ADEF]' : ''} `}
        >
            {children}

            {isProgram && isOpen && (
                <div
                    className={clsx(
                        ' absolute bottom-0 left-1/2 transform -translate-x-1/2  h-[2px] bg-blue-400 ',
                        { 'w-5/6': !mouseOver },
                        {
                            'w-full transition ease-in-out duration-150':
                                mouseOver,
                        },
                    )}
                />
            )}
        </button>
    );
};

export default TaskbarButton;
