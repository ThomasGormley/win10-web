import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { stopProcess } from '../../../stores/processes.slice';
import { SquareIcon, UnderscoreIcon, XIcon } from '../../icons';
import { vscodeProgramConfig } from '../../../data/programs/vscode.config';

const Chrome = () => {
    const { id, window, title } = vscodeProgramConfig;
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col h-full bg-[#3C3C3C] shadow-2xl">
            <div
                className={clsx(
                    'flex items-center border-gray-400 justify-between h-7 text-gray-300 ',
                    'drag-handle',
                )}
            >
                <div className="flex items-center h-full">
                    <img
                        className="object-contain w-4 h-4 m-3"
                        src={`/assets/icons/${id}/256.png`}
                        alt={`${title} program icon`}
                    />
                    <div className="h-full text-xs">
                        {window.menu.map((item) => (
                            <button
                                key={item}
                                aria-disabled
                                className="h-full px-1 hover:bg-gray-600 hover:transition hover:duration-75 focus:outline-none"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-full py-[1px] text-white">
                    <button
                        type="button"
                        className="h-full px-4 transition duration-100 hover:bg-gray-600 hover:transition hover:duration-75 focus:outline-none"
                    >
                        <UnderscoreIcon className="w-[0.65rem] h-[0.65rem]" />
                    </button>
                    <button
                        type="button"
                        className="h-full px-4 transition duration-100 hover:bg-gray-600 hover:transition hover:duration-75 focus:outline-none"
                    >
                        <SquareIcon className="w-[0.65rem] h-[0.65rem]" />
                    </button>
                    <button
                        type="button"
                        className="h-full px-4 transition duration-100 hover:bg-gray-600 hover:transition hover:duration-75 focus:outline-none"
                        onClick={() => dispatch(stopProcess(id))}
                    >
                        <XIcon className="w-[0.65rem] h-[0.65rem]" />
                    </button>
                </div>
            </div>
            <iframe
                className="w-full h-full"
                title="VSCode Window"
                src="http://www.google.com/custom?q=&btnG=Search"
            ></iframe>
        </div>
    );
};

export default Chrome;
