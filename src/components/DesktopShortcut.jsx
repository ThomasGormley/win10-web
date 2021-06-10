import { useDispatch } from 'react-redux';
import { toggleProcess } from '../stores/processes.slice';

const DesktopShortcut = ({ config }) => {
    const dispatch = useDispatch();
    const { id, title, shouldOpenWindow, externalAction } = config;

    const handleIconClick = () => {
        if (shouldOpenWindow) return dispatch(toggleProcess(id));
        return externalAction();
    };

    return (
        <button
            key={id}
            onClick={() => handleIconClick()}
            className="flex flex-col items-center justify-center w-20 mb-6 text-gray-100 focus:outline-none"
        >
            <img
                className="object-contain w-8 h-8 "
                src={`/assets/icons/${id}/256.png`}
                alt={`${title} program icon`}
            />
            <span
                className="mt-1 text-xs"
                style={{
                    textShadow: '0px 1px 5px rgba(0,0,0,0.7)',
                }}
            >
                {title}
            </span>
        </button>
    );
};

export default DesktopShortcut;
