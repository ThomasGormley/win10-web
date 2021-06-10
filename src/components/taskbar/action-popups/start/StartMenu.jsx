import {
    FileIcon,
    MenuIcon,
    PictureIcon,
    PowerButtonIcon,
    SettingsIcon,
} from '../../../icons';
import ProgramsList from './ProgramsList';
import { startPopupConfig } from '../../../../data/taskbar';
import { match } from '../../../../util/match';
import Tile from './Tile';
import clsx from 'clsx';

const StartMenu = () => {
    const { actions, tiles } = startPopupConfig;
    return (
        <div className="flex flex-row h-[640px] text-gray-100 pr-4 space-x-2">
            <div className="flex flex-col justify-between pt-1 ">
                <div>
                    <button
                        type="button"
                        className="p-3 hover:bg-white hover:bg-opacity-20 focus:outline-none hover:transition hover:duration-100 hover:ring-white hover:ring-inset hover:ring-opacity-60"
                    >
                        <MenuIcon className="w-4 h-4 " />
                    </button>
                </div>
                <div className="flex flex-col">
                    {actions.map((action) => (
                        <button
                            key={action}
                            type="button"
                            className={clsx(
                                'hover:bg-white hover:bg-opacity-20 focus:outline-none',
                                action === 'User' ? 'p-2.5' : 'p-4 ',
                            )}
                        >
                            {match(action, {
                                User() {
                                    return (
                                        <img
                                            className="object-contain w-10 h-auto rounded-full"
                                            src={`/assets/icons/user-thumbnail.png`}
                                            alt={`User icon`}
                                        />
                                    );
                                },
                                Documents() {
                                    return <FileIcon className="w-4 h-4 " />;
                                },
                                Pictures() {
                                    return <PictureIcon className="w-4 h-4 " />;
                                },
                                Settings() {
                                    return (
                                        <SettingsIcon className="w-4 h-4 " />
                                    );
                                },
                                Power() {
                                    return (
                                        <PowerButtonIcon className="w-4 h-4 " />
                                    );
                                },
                            })}
                        </button>
                    ))}
                </div>
            </div>

            {/* Programs List */}
            <div className="flex flex-col flex-shrink-0 pt-2 space-y-2 overflow-y-auto">
                <ProgramsList />
            </div>

            {/* Tiles */}
            <div className="w-full pt-2 pl-3 space-y-2">
                <span className="text-xs">My Tiles</span>
                <div className="grid grid-cols-3 gap-1">
                    {tiles['My Tiles'].map((tile) => (
                        <Tile key={tile.id} config={tile} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartMenu;
