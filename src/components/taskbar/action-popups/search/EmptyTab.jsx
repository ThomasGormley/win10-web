const EmptyTab = ({ icon, text }) => (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 space-y-9 ">
        <span className="w-32 h-32 text-gray-500">{icon}</span>
        <span className="text-3xl text-gray-400">{text}</span>
    </div>
);

export default EmptyTab;
