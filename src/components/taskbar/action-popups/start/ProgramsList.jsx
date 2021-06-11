import { useDispatch } from 'react-redux';
import { programsConfig } from '../../../../data/programs';
import { handleStartProcess } from '../../../../stores/actions';

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

const ProgramsList = () => {
    const dispatch = useDispatch();

    return alphabet.map((letter) => {
        const programsWithThisLetter = programsConfig.filter(
            ({ title }) => title[0].toLowerCase() === letter.toLowerCase(),
        );

        if (programsWithThisLetter.length === 0) return;

        return (
            <div key={letter}>
                <div className="w-full pl-1 text-center">
                    <div className="w-6">
                        <span className="text-xs">{letter}</span>
                    </div>
                </div>

                {programsWithThisLetter.map(({ id, title, ...config }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() =>
                            handleStartProcess(dispatch, { id, ...config })
                        }
                        className="flex w-full py-2 pl-1 pr-4 cursor-default hover:transition hover:duration-100 hover:ring-white hover:ring-1 hover:ring-inset hover:ring-opacity-20 hover:bg-white hover:bg-opacity-20 hover"
                    >
                        <div className="flex items-center space-x-2 ">
                            <img
                                className="object-contain w-6 h-6"
                                src={`/assets/icons/${id}/256.png`}
                                alt={`${title} program icon`}
                            />
                            <span className="text-xs">{title}</span>
                        </div>
                    </button>
                ))}
            </div>
        );
    });
};

export default ProgramsList;
