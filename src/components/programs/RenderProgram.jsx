import { Fragment, lazy, Suspense } from 'react';
import { match } from '../../util/match';
import Chrome from './chrome/Chrome';

const VSCode = lazy(() => import('./vscode/VSCode'));
const Placeholder = lazy(() => import('./Placeholder'));

const RenderProgram = ({ program }) => (
    <Suspense fallback={<Fragment></Fragment>}>
        {match(program.id, {
            explorer() {
                return <Placeholder program={program} />;
            },
            vscode() {
                return <VSCode />;
            },
            chrome() {
                return <Chrome />;
            },
            [match.__]() {
                return <Placeholder program={program} />;
            },
        })}
    </Suspense>
);

export default RenderProgram;
