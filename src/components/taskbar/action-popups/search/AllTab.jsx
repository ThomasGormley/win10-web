import { taskbarConfig } from '../../../../data/taskbar/taskbar.config';
import ProgramsBanner from './ProgramsBanner';
import ProgramsRow from './ProgramsRow';

const AllTab = () => (
    <>
        <span className="text-sm text-gray-100">Top apps</span>

        <ProgramsBanner programs={taskbarConfig.programs} />

        <div className="grid grid-cols-2 mt-4 gap-x-4">
            {/* Recent */}
            <div>
                <span className="text-sm text-gray-100">Recent</span>

                <ProgramsRow programs={taskbarConfig.programs} />
            </div>

            {/* Quick Search */}
            <div>
                <span className="text-sm text-gray-100">Quick Searches</span>

                <div className="divide-y-[1px] divide-gray-500 divide-opacity-50">
                    {taskbarConfig.programs.map((program) => (
                        <div key={program.id}>
                            <button
                                type="button"
                                key={program.id}
                                className="flex items-center justify-start w-full h-auto px-3 py-4 space-x-2 rounded hover:bg-gray-500 bg-opacity-70"
                            >
                                <img
                                    className="object-contain w-8 h-8"
                                    src={`/assets/icons/${program.id}/256.png`}
                                    alt={`${program.tooltip} app icon`}
                                />
                                <span className="text-sm">
                                    {program.tooltip}
                                </span>
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
