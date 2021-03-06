import { useEffect, useMemo, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import useMaximizeWindow from '../hooks/useMaximiseWindow';
import { randint } from '../util/randint';
import RenderProgram from './programs/RenderProgram';

// Much of the logic used in this component was taken directly from macos-web
// https://github.com/puruvj/macos-web
const Window = ({
    program,
    windowIsFocused,
    setWindowIsFocused,
    focusedWindowZIndex,
}) => {
    const { resizable, height, width, id, minWidth, minHeight } = program;

    const [windowZIndex, setWindowZIndex] = useState(0);
    const windowRef = useRef();
    const containerRef = useRef();

    const maximiseWindow = useMaximizeWindow(windowRef);

    const randX = useMemo(
        () => randint(0, document.body.clientWidth - width),
        [width],
    );
    const randY = useMemo(
        () => randint(0, document.body.clientHeight - height),
        [height],
    );

    useEffect(() => {
        if (windowIsFocused) {
            setWindowZIndex(focusedWindowZIndex);
        }
    }, [focusedWindowZIndex, windowIsFocused]);

    useEffect(() => {
        containerRef.current?.focus();
        setWindowIsFocused(id);
    }, [id, setWindowIsFocused]);

    return (
        <Rnd
            ref={windowRef}
            style={{ zIndex: windowZIndex }}
            default={{
                height,
                width,
                x: randX,
                y: (100 + randY) / 2,
            }}
            enableResizing={resizable}
            dragHandleClassName="drag-handle"
            bounds="parent"
            minWidth={minWidth}
            minHeight={minHeight}
            onDragStart={() => {
                setWindowIsFocused(id);
            }}
        >
            <div
                className="w-full h-full bg-transparent"
                tabIndex={-1}
                ref={containerRef}
                onClick={() => setWindowIsFocused(id)}
            >
                <RenderProgram
                    program={program}
                    maximiseWindow={maximiseWindow}
                />
            </div>
        </Rnd>
    );
};

export default Window;
