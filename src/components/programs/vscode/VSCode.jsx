import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { stopProcess } from '../../../stores/processes.slice';
import { SquareIcon, UnderscoreIcon, XIcon } from '../../icons';
import { vscodeProgramConfig } from '../../../data/programs/vscode.config';

const VSCode = () => {
    const { id } = vscodeProgramConfig;
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col h-full bg-gray-700 shadow-2xl">
            <div
                className={clsx(
                    'flex items-center border-gray-400 justify-between h-8 text-gray-200 ',
                    'drag-handle',
                )}
            >
                <span className="ml-4 text-sm ">VS Code</span>

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
            <iframe
                className="w-full h-full"
                title="VSCode Window"
                src="https://github1s.com/thomasgormley/win10-web"
            ></iframe>
        </div>
    );
};

export default VSCode;
