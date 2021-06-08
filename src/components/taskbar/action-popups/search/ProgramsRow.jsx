const ProgramsRow = ({ programs }) => (
    <div className="divide-y-[1px] divide-gray-500 divide-opacity-50">
        {programs.slice(0, 4).map((program) => (
            <div key={program.id}>
                <button
                    type="button"
                    key={program.id}
                    className="flex items-center justify-start w-full h-auto px-3 py-4 space-x-2 rounded hover:bg-gray-500 bg-opacity-70"
                >
                    <img
                        className="object-contain w-8 h-8"
                        src={`/assets/icons/${program.id}/256.png`}
                        alt={`${program.tooltip} app icon`}
                    />
                    <span className="text-sm">{program.tooltip}</span>
                </button>
            </div>
        ))}
    </div>
);

export default ProgramsRow;
