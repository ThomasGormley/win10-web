/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { SquareIcon, UnderscoreIcon, XIcon } from '../icons';
import { stopProcess } from '../../stores/processes.slice';

const Placeholder = ({ program }) => {
    const { id, tooltip, title } = program;

    const dispatch = useDispatch();

    return (
        <div className={clsx('w-full h-full bg-white')}>
            <div className="flex flex-col h-full border border-gray-700 ">
                <div
                    className={clsx(
                        'flex items-center border-gray-400 justify-between h-8 text-gray-900 ',
                        'drag-handle',
                    )}
                >
                    <span className="ml-4 text-sm text-gray-700 ">{title}</span>

                    <div className="h-full py-[1px] text-black">
                        <button
                            type="button"
                            className="h-full px-4 transition duration-100 hover:bg-gray-200"
                        >
                            <UnderscoreIcon className="w-[0.65rem] h-[0.65rem]" />
                        </button>
                        <button
                            type="button"
                            className="h-full px-4 transition duration-100 hover:bg-gray-200"
                        >
                            <SquareIcon className="w-[0.65rem] h-[0.65rem]" />
                        </button>
                        <button
                            type="button"
                            className="h-full px-4 transition duration-100 hover:bg-gray-200"
                            onClick={() => dispatch(stopProcess(id))}
                        >
                            <XIcon className="w-[0.65rem] h-[0.65rem]" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center h-full ">
                    <img
                        className="object-contain w-[30%] h-[30%]"
                        src={`/assets/icons/${id}/256.png`}
                        alt={`${tooltip} program icon`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Placeholder;
