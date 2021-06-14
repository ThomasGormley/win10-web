import { useEffect, useState } from 'react';
import Wallpaper from '../components/Wallpaper';
import { useUserState } from '../context/user-context';

//https://iconscout.com/categories/windows-interface/icons

const Locked = () => {
    const { dispatch } = useUserState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        preloadImage('/assets/screen-saver.png');
    }, []);

    const handleSignIn = () => {
        setLoading(true);
        dispatch({ type: 'UNLOCK_DESKTOP' });

        // setTimeout(() => {
        //     dispatch({ type: 'UNLOCK_DESKTOP' });
        // }, 1000);
    };

    return (
        <section className="w-full h-full font-light text-white">
            <div className="flex flex-col items-center justify-center h-full -mt-20 align-middle">
                <span className="w-[12rem] h-[12rem]">
                    <img
                        className="rounded-full"
                        src="/assets/icons/user-thumbnail.png"
                        alt="Thomas Gormley"
                    />
                </span>

                {!loading ? (
                    <>
                        <h1 className="mt-4 text-4xl">User</h1>
                        <button
                            type="button"
                            className="py-1 mt-3 text-sm bg-white bg-opacity-25 border border-transparent ring-transparent focus:outline-none px-7 border-1 ring-2 ring-transparen focus:border focus:border-black focus:ring-offset-0 focus:ring-1 focus:ring-white focus:border-1"
                            onClick={() => {
                                handleSignIn();
                            }}
                        >
                            Sign in
                        </button>
                    </>
                ) : (
                    <img
                        src="/assets/loader.png"
                        className="w-10 h-10 mt-3"
                        alt=""
                    />
                )}
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
