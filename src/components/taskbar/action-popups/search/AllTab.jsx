import { taskbarConfig } from '../../../../data/taskbar/taskbar.config';
import { searchPopupConfig } from '../../../../data/taskbar/search.config';
import ProgramsBanner from './ProgramsBanner';
import ProgramsRow from './ProgramsRow';
import { match } from '../../../../util/match';
import { ClockIcon, NewsIcon, PictureIcon, SunIcon } from '../../../icons';

const AllTab = () => (
    <>
        <span className="text-sm font-medium text-gray-100">Top apps</span>

        <ProgramsBanner programs={taskbarConfig.programs} />

        <div className="grid grid-cols-2 mt-4 gap-x-4">
            {/* Recent */}
            <div>
                <span className="text-sm font-medium text-gray-100">
                    Recent
                </span>

                <ProgramsRow programs={taskbarConfig.programs} />
            </div>

            {/* Quick Search */}
            <div>
                <span className="text-sm font-medium text-gray-100">
                    Quick Searches
                </span>

                <div className="divide-y-[1px] divide-gray-500 divide-opacity-50">
                    {searchPopupConfig['quick-searches'].map((search) => (
                        <div key={search}>
                            <button
                                type="button"
                                aria-disabled
                                className="flex items-center justify-start w-full h-auto px-3 py-4 space-x-2 rounded hover:bg-gray-300 hover:bg-opacity-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100 focus:outline-none"
                            >
                                {match(search, {
                                    ['Weather']() {
                                        return <SunIcon className="w-8 h-8" />;
                                    },
                                    ['Top news']() {
                                        return <NewsIcon className="w-8 h-8" />;
                                    },
                                    ['Today in history']() {
                                        return (
                                            <ClockIcon className="w-8 h-8" />
                                        );
                                    },
                                    ['Pictures']() {
                                        return (
                                            <PictureIcon className="w-8 h-8" />
                                        );
                                    },
                                })}
                                <span className="text-sm">{search}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex justify-end w-full mt-4">
            <span className="px-2 py-1 bg-gray-600 rounded-full bg-opacity-70">
                X
            </span>
        </div>
    </>
);

export default AllTab;
