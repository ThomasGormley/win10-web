/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';

export function randint(lower, upper) {
    if (lower > upper) [lower, upper] = [upper, lower];

    return lower + Math.floor((upper - lower) * Math.random());
}

const Window = ({ programConfig }) => {
    // const [activeAppZIndex] = useAtom(activeAppZIndexStore);
    // const [activeApp, setActiveApp] = useAtom(activeAppStore);

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
        console.log(document.body.clientWidth);
        console.log(((3 / 2) * document.body.clientWidth + randX) / 2);
    }, []);

    const { resizable, height, width, expandable } = programConfig;

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
            <div
                className={clsx('w-full h-full grid bg-white', 'drag-handle')}
                tabIndex={-1}
                ref={containerRef}
                onClick={focusCurrentApp}
            >
                <span>test</span>
            </div>
        </Rnd>
    );
};

export default Window;
