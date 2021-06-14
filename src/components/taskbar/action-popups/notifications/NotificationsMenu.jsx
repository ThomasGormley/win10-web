import { notificationsPopupConfig } from '../../../../data/taskbar';
import { match } from '../../../../util/match';
import { ScreenIcon, SettingsIcon, WebIcon, WifiIcon } from '../../../icons';

const NotificationsMenu = () => {
    const { tooltip, actions } = notificationsPopupConfig;
    return (
        <div className="flex flex-col justify-between h-full px-4 pt-4 pb-1 text-gray-100 ">
            <span className="w-full text-xs text-right text-blue-300 cursor-pointer hover:transition hover:duration-100 hover:text-gray-400">
                Manage notifications
            </span>
            <span className="w-full font-medium text-center text-gray-400">
                {tooltip}
            </span>
            <div className="grid grid-cols-4 gap-1">
                {actions.map((action) => (
                    <div
                        key={action}
                        className="flex flex-col justify-between w-[5.5rem] bg-opacity-90 h-16 p-1 text-xs bg-gray-600"
                    >
                        <span>
                            {match(action, {
                                Connect() {
                                    return (
                                        <ScreenIcon className="w-4 h-4 mt-1" />
                                    );
                                },
                                Network() {
                                    return (
                                        <WifiIcon className="w-4 h-4 mt-1" />
                                    );
                                },
                                ['All settings']() {
                                    return (
                                        <SettingsIcon className="w-4 h-4 mt-1" />
                                    );
                                },
                                Location() {
                                    return <WebIcon className="w-4 h-4 mt-1" />;
                                },
                            })}
                        </span>
                        <span>{action}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsMenu;
