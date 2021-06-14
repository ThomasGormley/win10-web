import { useDispatch } from 'react-redux';
import { handleStartProcess } from '../../../../stores/actions';
import { match } from '../../../../util/match';
import WeatherTile from './WeatherTile';

const Tile = ({ config }) =>
    // const { title, tile, id } = config;
    // const dispatch = useDispatch();
    match(config.id, {
        weather() {
            return <WeatherTile config={config} />;
        },
        [match.__]() {
            return <Tile.Placeholder config={config} />;
        },
    });

export const Placeholder = ({ config }) => {
    const { title, tile, id } = config;
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => handleStartProcess(dispatch, config)}
            key={title}
            style={{
                gridColumn: `span ${tile['col-span']} / span ${tile['col-span']}`,
                gridRow: `span ${tile['row-span']} / span ${tile['row-span']}`,
            }}
            className="flex p-2 flex-col cursor-default focus:outline-none justify-center min-w-[6rem] h-24 bg-blue-600 hover:ring hover:ring-white hover:ring-inset hover:ring-opacity-60 hover:transition hover:duration-75"
        >
            <div className="flex items-center justify-start w-full h-full">
                <img
                    className="object-contain w-10 h-10 mx-auto"
                    src={`/assets/icons/${id}/256.png`}
                    alt={`${title} program icon`}
                />
            </div>
            <span className="text-xs">{title}</span>
        </button>
    );
};

Tile.Placeholder = Placeholder;

export default Tile;
