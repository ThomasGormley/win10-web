import clsx from 'clsx';
import { useState } from 'react';
import { programsConfig } from '../../../data/programs/programs.config';
const TaskbarProgramButton = ({ children, start, tooltip = '', width, id }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const [isOpen] = useState(false);
    const isProgram = programsConfig.some((program) => program.id === id);

    return (
        <button
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            type="button"
            title={tooltip}
            className={clsx(
                'h-10 relative cursor-default transition duration-150 hover:bg-white hover:bg-opacity-[0.15] text-gray-100 focus:ring-2 focus:ring-inset focus:ring-gray-100 focus:outline-none',
                { [width]: width },
                { 'hover:text-[#00ADEF]': start },
            )}
        >
            {children}

            {isProgram && isOpen && (
                <div
                    className={clsx(
                        'absolute bottom-0 left-1/2 transform -translate-x-1/2  h-[2px] bg-blue-400 ',
                        {
                            'w-5/6': !mouseOver,
                        },
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

export default TaskbarProgramButton;
