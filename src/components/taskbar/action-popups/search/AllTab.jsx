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

        <div className="flex justify-end w-full mt-8">
            <span
                className="p-3 bg-gray-600 rounded-full bg-opacity-70 hover:bg-gray-300 hover:bg-opacity-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-100 focus:outline-none"
                title="Search with a screenshot"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </span>
        </div>
    </>
);

export default AllTab;
