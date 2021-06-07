import { useUserState } from '../context/user-context';
import Desktop from './Desktop';
import Locked from './Locked';

function Windows10() {
    const { desktopIsLocked } = useUserState();
    return (
        <main className="w-screen h-screen max-h-screen overflow-hidden">
            {desktopIsLocked ? <Locked /> : <Desktop />}
        </main>
    );
}

export default Windows10;
