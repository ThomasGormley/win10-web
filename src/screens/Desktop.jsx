import DisplayArea from '../components/DisplayArea';
import Taskbar from '../components/taskbar/Taskbar';
import Wallpaper from '../components/Wallpaper';

const Desktop = () => (
    <>
        <section className="flex flex-col w-full h-full ">
            <DisplayArea />
            <Taskbar />
        </section>

        <Wallpaper />
    </>
);

export default Desktop;
