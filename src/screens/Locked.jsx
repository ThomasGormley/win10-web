import { useEffect } from 'react';
import Wallpaper from '../components/Wallpaper';
import { useUserState } from '../context/user-context';

//https://iconscout.com/categories/windows-interface/icons

const Locked = () => {
    const { dispatch } = useUserState();

    useEffect(() => {
        preloadImage('/assets/screen-saver.png');
    }, []);

    return (
        <section className="w-full h-full font-light text-white">
            <div className="flex flex-col items-center justify-center h-full -mt-20 align-middle">
                <span className="w-[12rem] h-[12rem]">
                    <img
                        className="rounded-full"
                        src="https://avatars.githubusercontent.com/u/6354097?v=4"
                        alt="Thomas Gormley"
                    />
                </span>

                <h1 className="mt-4 text-4xl">Thomas</h1>
                <button
                    type="button"
                    className="py-1 mt-3 text-sm bg-white bg-opacity-25 border border-transparent ring-transparent focus:outline-none px-7 border-1 ring-2 ring-transparen focus:border focus:border-black focus:ring-offset-0 focus:ring-1 focus:ring-white focus:border-1"
                    onClick={() => {
                        dispatch({ type: 'UNLOCK_DESKTOP' });
                    }}
                >
                    Sign in
                </button>
            </div>

            <Wallpaper img="locked" />
        </section>
    );
};

function preloadImage(path) {
    const img = new Image();
    img.src = path;
}

export default Locked;
