import useClock from '../../../../hooks/useClock';

const TaskbarClock = () => {
    const dateTime = useClock();

    return (
        <div
            className="flex flex-col px-2 text-xs leading-normal"
            title={dateTime.toLocaleString([], {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            })}
        >
            <span>
                {' '}
                {dateTime.toLocaleString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })}{' '}
            </span>
            <span> {dateTime.toLocaleDateString()} </span>
        </div>
    );
};

export default TaskbarClock;
