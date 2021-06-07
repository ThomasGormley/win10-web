const ProgramsBanner = ({ programs }) => (
    <div className="grid grid-cols-5 gap-1 mt-2">
        {programs.map((program) => (
            <button
                type="button"
                key={program.id}
                className="flex flex-col items-center justify-center w-auto h-auto px-3 py-4 space-y-1 bg-gray-600 rounded bg-opacity-70"
            >
                <img
                    className="object-contain w-8 h-8"
                    src={`/assets/icons/${program.id}/256.png`}
                    alt={`${program.tooltip} app icon`}
                />
                <span className="text-sm">{program.tooltip}</span>
            </button>
        ))}
    </div>
);

export default ProgramsBanner;
