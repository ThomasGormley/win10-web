import { Fragment, lazy, Suspense } from 'react';
import { match } from '../../util/match';

const VSCode = lazy(() => import('./vscode/VSCode'));
const Placeholder = lazy(() => import('./Placeholder'));

const RenderProgram = ({ program, maximiseWindow }) => (
    <Suspense fallback={<Fragment></Fragment>}>
        {match(program.id, {
            vscode() {
                return <VSCode />;
            },
            [match.__]() {
                return (
                    <Placeholder
                        program={program}
                        maximiseWindow={maximiseWindow}
                    />
                );
            },
        })}
    </Suspense>
);

export default RenderProgram;
