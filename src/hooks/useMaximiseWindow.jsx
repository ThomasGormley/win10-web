import { useRef } from 'react';

/**
 * Extract the x and y from the transform style of the base element using Regex
 * Why using this hacking method:
 * react-rnd uses transform and translate to shift window around instead of top
 * and left and it does not provide the access to x and y values from ref
 * @param transformStyle The transform style string. e.g. translate(1123.75px, 7px)
 * @returns The window position. e.g. { x: 1123.75, y: 7 }
 */
function extractPositionFromTransformStyle(transformStyle) {
    console.log(`transformStyle`, transformStyle);
    const matched = transformStyle.matchAll(/[0-9.]+/g);
    // console.log(`matched.next()`, matched.next());
    // console.log(`matched.next().value`, matched.next().value);
    // console.log({
    //     x: Number(matched.next().value[0]),
    //     y: Number(matched.next().value[0]),
    // });
    try {
        return {
            x: Number(matched.next().value[0]),
            y: Number(matched.next().value[0]),
        };
    } catch {
        return { x: 0, y: 0 };
    }
}

// Hook & util function taken from macos-web
// https://github.com/puruvj/macos-web
const useMaximizeWindow = (windowRef) => {
    const originalSizeRef = useRef({ height: 0, width: 0 });
    const originalPositionRef = useRef({
        x: 0,
        y: 0,
    });

    return () => {
        if (
            !windowRef?.current?.resizableElement?.current ||
            !windowRef?.current
        ) {
            return;
        }

        // Get desktop height and width
        const taskbarElementHeight =
            document.getElementById('taskbar')?.clientHeight ?? 0;
        const desktopHeight = document.body.clientHeight - taskbarElementHeight;
        const desktopWidth = document.body.clientWidth;

        // Get current height and width
        const { clientWidth: windowWidth, clientHeight: windowHeight } =
            windowRef.current.resizableElement.current;

        // Get current left and top position
        const { x: windowLeft, y: windowTop } =
            extractPositionFromTransformStyle(
                windowRef?.current?.resizableElement?.current.style.transform,
            );

        // When it's already maximized, revert the window to the previous size
        if (windowWidth === desktopWidth && windowHeight === desktopHeight) {
            windowRef.current.updateSize(originalSizeRef.current);
            windowRef.current.updatePosition(originalPositionRef.current);
        }
        // Maximize the window to the size of the desktop
        else {
            originalSizeRef.current = {
                width: windowWidth,
                height: windowHeight,
            };
            originalPositionRef.current = { x: windowLeft, y: windowTop };

            windowRef.current.updateSize({
                height: desktopHeight,
                width: desktopWidth,
            });

            windowRef.current.updatePosition({
                x: 0,
                y: 0,
            });
        }
    };
};

export default useMaximizeWindow;
