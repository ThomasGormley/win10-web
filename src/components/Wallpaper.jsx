const wallpapers = {
    default: 'bg-default',
    locked: 'bg-locked',
};
const Wallpaper = ({ img = 'default' }) => (
    <div
        className={`h-full w-full z-[-1] fixed top-0 ${wallpapers[img]} bg-no-repeat bg-cover bg-center`}
        aria-hidden="true"
    />
);

export default Wallpaper;
