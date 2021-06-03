const TaskbarButton = ({ children, start, tooltip = '' }) => (
    <button
        type="button"
        title={tooltip}
        className={`w-full h-full cursor-default transition duration-150 
        hover:bg-white hover:bg-opacity-25 text-white 
        focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none
        ${start ? 'hover:text-[#00ADEF]' : ''} `}
    >
        {children}
    </button>
);

export default TaskbarButton;

// ${px ? `px-${px}` : ''} ${
//     py ? `py-${py}` : ''
// }
