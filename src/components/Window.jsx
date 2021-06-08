/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';
import { stopProcess } from '../stores/processes.slice';
import SquareIcon from './icons/SquareIcon';
import UnderscoreIcon from './icons/UnderscoreIcon';
import XIcon from './icons/XIcon';

export function randint(lower, upper) {
    if (lower > upper) [lower, upper] = [upper, lower];

    return lower + Math.floor((upper - lower) * Math.random());
}

const Window = ({ program }) => {
    const { resizable, height, width, expandable, id, tooltip, title } =
        program;

    const dispatch = useDispatch();

    const windowRef = useRef();
    const containerRef = useRef();

    const [appZIndex, setAppZIndex] = useState(0);
    const [isBeingDragged, setIsBeingDragged] = useState(false);

    const randX = useMemo(() => randint(-600, 600), []);
    const randY = useMemo(() => randint(-100, 100), []);

    //   const maximizeApp = useMaximizeWindow(windowRef);

    //   useEffect(() => {
    //     if (activeApp === appID) setAppZIndex(activeAppZIndex);
    //   }, [activeApp]);

    useEffect(() => {
        containerRef.current?.focus();
        console.log(program);
        console.log(((3 / 2) * document.body.clientWidth + randX) / 2);
    }, []);

    const focusCurrentApp = () => {
        // setActiveApp(appID);
        console.log('activeApp');
    };

    return (
        <Rnd
            ref={windowRef}
            style={{ zIndex: 1 }}
            default={{
                height,
                width,
                x: ((3 / 2) * document.body.clientWidth + randX) / 2,
                y: (100 + randY) / 2,
            }}
            enableResizing={resizable}
            dragHandleClassName="drag-handle"
            bounds="parent"
            minWidth="300"
            minHeight="300"
            onDragStart={() => {
                focusCurrentApp();
                setIsBeingDragged(true);
            }}
            onDragStop={() => setIsBeingDragged(false)}
        >
            {/* match components here */}
            <div
                className={clsx('w-full h-full grid bg-white shadow-2xl ')}
                tabIndex={-1}
                ref={containerRef}
                onClick={focusCurrentApp}
            >
                <div className="flex flex-col h-full border border-gray-700 ">
                    <div
                        className={clsx(
                            'flex items-center border-gray-400 justify-between h-8 text-gray-900 ',
                            'drag-handle',
                        )}
                    >
                        <span className="ml-4 text-sm text-gray-700 ">
                            {title}
                        </span>

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
                            alt={`${tooltip} app icon`}
                        />
                    </div>
                </div>
            </div>
        </Rnd>
    );
};

export default Window;
