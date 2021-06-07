import { taskbarConfig } from '../../../../data/taskbar/taskbar.config';
import ProgramsBanner from './ProgramsBanner';
import ProgramsRow from './ProgramsRow';

const AppsTab = () => (
    <>
        <span className="text-sm text-gray-100">Frequent</span>

        <ProgramsBanner programs={taskbarConfig.programs} />

        <div className="grid grid-cols-1 mt-4 gap-x-4">
            {/* Recent */}
            <div>
                <span className="text-sm text-gray-100">Recent</span>

                <ProgramsRow programs={taskbarConfig.programs} />
            </div>
        </div>
    </>
);

export default AppsTab;
