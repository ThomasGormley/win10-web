import { useDispatch } from 'react-redux';
import { handleStartProcess } from '../../../../stores/actions';

const ProgramsRow = ({ programs }) => {
    const dispatch = useDispatch();

    return (
        <div className="divide-y-[1px] divide-gray-500 divide-opacity-50">
            {programs.slice(0, 4).map(({ id, tooltip, ...config }) => (
                <div key={id}>
                    <button
                        onClick={() =>
                            handleStartProcess(dispatch, { id, ...config })
                        }
                        type="button"
                        key={id}
                        className="flex items-center justify-start w-full h-auto px-3 py-4 space-x-2 rounded hover:bg-gray-300 hover:bg-opacity-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100 focus:outline-none"
                    >
                        <img
                            className="object-contain w-8 h-8"
                            src={`/assets/icons/${id}/256.png`}
                            alt={`${tooltip} app icon`}
                        />
                        <span className="text-sm">{tooltip}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProgramsRow;
