import { Fragment, lazy, Suspense } from 'react';
import { match } from '../../util/match';

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
            [match.__]() {
                return <Placeholder program={program} />;
            },
        })}
    </Suspense>
);

export default RenderProgram;
