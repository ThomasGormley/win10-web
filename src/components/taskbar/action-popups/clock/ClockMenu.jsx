import useCalendar from '@veccu/react-calendar';
import useClock from '../../../../hooks/useClock';
import { format, getDate } from 'date-fns';
import { ChevronUpIcon } from '../../../icons';
import clsx from 'clsx';
const ClockMenu = () => {
    const dateTime = useClock();
    const { headers, body, navigation, cursorDate } = useCalendar({
        defaultWeekStart: 1,
    });
    // const {
    //     headers: headersNext,
    //     body: bodyNext,
    //     view: viewNext,
    // } = useCalendar({
    //     defaultWeekStart: 1,
    // });
    const { toNext, toPrev } = navigation;
    return (
        <div className="flex flex-col w-[22.5rem] divide-y divide-white divide-opacity-[0.18]   text-gray-300">
            {/* Top Clock */}
            <div className="px-6 py-5 ">
                <span className="block text-5xl font-light text-gray-100">
                    {dateTime.toLocaleString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                    })}
                </span>
                <span className="block mt-2 text-sm text-blue-300 transition duration-75 cursor-pointer hover:text-gray-400">
                    {dateTime.toLocaleString([], {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}
                </span>
            </div>

            {/* Calendar */}
            <div className="pt-2 pb-4">
                <div className="flex items-center justify-between px-6 mb-2">
                    <span className="transition duration-100 cursor-default hover:text-gray-100">
                        {format(cursorDate, 'MMMM yyyy', {})}
                    </span>
                    <div className="flex items-center space-x-5 ">
                        <button
                            onClick={() => toPrev()}
                            type="button"
                            className="text-gray-400 transition duration-100 outline-none hover:text-gray-100 focus:ring ring-white focus:outline-none"
                        >
                            <ChevronUpIcon className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => toNext()}
                            type="button"
                            className="text-gray-400 transition duration-100 outline-none hover:text-gray-100 focus:ring ring-white focus:outline-none"
                        >
                            <ChevronUpIcon className="w-6 h-6 transform rotate-180" />
                        </button>
                    </div>
                </div>
                <table
                    cellSpacing="10"
                    className="w-full h-full px-2 text-center border-separate "
                    style={{ borderSpacing: '0.5rem' }}
                >
                    <thead className="w-full text-sm font-normal">
                        <tr>
                            {headers.weekDays.map(({ key, value }) => (
                                <th className="font-normal " key={key}>
                                    {format(value, 'iiiiii', {})}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.value.map(({ key, value: days }) => (
                            <tr key={key}>
                                {days.map(
                                    ({
                                        key,
                                        value,
                                        isCurrentDate,
                                        isCurrentMonth,
                                    }) => (
                                        <td
                                            className={clsx(
                                                'py-1 transition duration-75 hover:ring-2 hover:ring-gray-100 hover:ring-opacity-75',
                                                {
                                                    'bg-blue-500 ring-2 ring-blue-500 ring-offset-black ring-offset-2 !text-gray-100':
                                                        isCurrentDate,
                                                },
                                                {
                                                    'text-gray-500':
                                                        !isCurrentMonth,
                                                },
                                            )}
                                            key={key}
                                        >
                                            {getDate(value)}
                                        </td>
                                    ),
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-end w-full px-6 mt-4 text-blue-300">
                    <span className="flex items-end text-sm align-baseline transition duration-100 cursor-pointer hover:text-gray-400">
                        Setup Agenda
                        <span className="ml-2">
                            <ChevronUpIcon className="w-4 h-4" />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ClockMenu;
