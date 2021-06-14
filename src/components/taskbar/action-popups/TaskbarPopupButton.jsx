import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import DisplayPopupIcon from './DisplayPopupIcon';
import { usePopper } from 'react-popper';
import { match } from '../../../util/match';
import SystemTrayMenu from '../action-popups/system-tray/SystemTrayMenu';
import ClockMenu from '../action-popups/clock/ClockMenu';
import SearchMenu from './search/SearchMenu';
import { searchPopupConfig } from '../../../data/taskbar/search.config';
import { startPopupConfig } from '../../../data/taskbar/start.config';
import StartMenu from './start/StartMenu';

const TaskbarPopupButton = ({ tooltip = '', width, id, placement }) => {
    const isSearchPopup = id === searchPopupConfig.id;
    const isStartPopup = id === startPopupConfig.id;

    const [referenceElement, setReferenceElement] = useState();
    const [popperElement, setPopperElement] = useState();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
    });
    const backgroundStyle = {
        background: `${
            isSearchPopup
                ? 'radial-gradient(circle, rgba(47,47,47,1) 0%, rgba(44,44,44,1) 100%)'
                : isStartPopup
                ? 'rgba(36, 36, 36, 0.9)'
                : 'rgba(38, 38, 38, 0.8)'
        }`,
        backdropFilter: 'blur(8.0px)',
        WebkitBackdropFilter: 'blur(10.0px)',
    };
    return (
        <Popover as={Fragment}>
            {({ open }) => (
                <>
                    <Popover.Button
                        title={tooltip}
                        ref={setReferenceElement}
                        className={clsx(
                            'h-10 relative cursor-default transition duration-150 hover:bg-white hover:bg-opacity-[0.15] text-gray-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100 focus:outline-none',
                            { [width]: width },
                            { 'hover:text-[#00ADEF]': isStartPopup },
                        )}
                    >
                        <span className="flex justify-center">
                            <DisplayPopupIcon id={id} />
                        </span>
                    </Popover.Button>

                    {open && (
                        <Transition
                            enter="transition duration-250 ease-out"
                            enterFrom=" opacity-0"
                            enterTo=" opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom=" opacity-100"
                            leaveTo=" opacity-0"
                        >
                            <Popover.Panel
                                ref={setPopperElement}
                                style={{
                                    ...styles.popper,
                                    boxShadow:
                                        '0 -1px 10px 0 rgba( 0, 0, 0, 0.2 )',

                                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
                                    ...backgroundStyle,
                                }}
                                {...attributes.popper}
                                className="z-[999] w-auto h-auto bg-white"
                            >
                                {match(id, {
                                    start() {
                                        return <StartMenu />;
                                    },
                                    search() {
                                        return <SearchMenu />;
                                    },
                                    ['system-tray']() {
                                        return <SystemTrayMenu />;
                                    },
                                    clock() {
                                        return <ClockMenu />;
                                    },
                                })}
                            </Popover.Panel>
                        </Transition>
                    )}
                </>
            )}
        </Popover>
    );
};

export default TaskbarPopupButton;
