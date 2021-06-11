import { useDispatch } from 'react-redux';
import { handleStartProcess } from '../stores/actions';

const DesktopShortcut = ({ config }) => {
    const dispatch = useDispatch();
    const { id, title } = config;

    return (
        <button
            key={id}
            onClick={() => handleStartProcess(dispatch, config)}
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
