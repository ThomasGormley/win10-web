import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleStartProcess } from '../../../stores/actions';

const TaskbarProgramButton = ({ children, width, config }) => {
    const { tooltip = '', id } = config;

    const processIsRunning = useSelector((state) => state.processes[id]);
    const dispatch = useDispatch();
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <button
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onClick={() => handleStartProcess(dispatch, config)}
            type="button"
            title={tooltip}
            className={clsx(
                'h-10 relative cursor-default transition duration-150 hover:bg-white hover:bg-opacity-[0.15] focus:bg-opacity-5 text-gray-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100 focus:outline-none',
                { [width]: width },
            )}
        >
            {children}

            {processIsRunning && (
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
