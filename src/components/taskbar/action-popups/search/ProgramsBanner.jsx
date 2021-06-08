import { useDispatch } from 'react-redux';
import { toggleProcess } from '../../../../stores/processes.slice';

const ProgramsBanner = ({ programs }) => {
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-5 gap-1 mt-2">
            {programs.slice(0, 5).map(({ id, tooltip }) => (
                <button
                    type="button"
                    onClick={() => dispatch(toggleProcess(id))}
                    key={id}
                    className="flex flex-col items-center justify-center w-auto h-auto px-3 py-4 space-y-1 bg-gray-600 rounded cursor-default focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100 focus:outline-none bg-opacity-70 hover:bg-gray-300 hover:bg-opacity-50 hover:shadow-lg"
                >
                    <img
                        className="object-contain w-8 h-8"
                        src={`/assets/icons/${id}/256.png`}
                        alt={`${tooltip} app icon`}
                    />
                    <span className="text-sm">{tooltip}</span>
                </button>
            ))}
        </div>
    );
};

export default ProgramsBanner;
