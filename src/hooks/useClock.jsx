import { useState } from 'react';
import useInterval from './useInterval';

const useClock = () => {
    const [dateTime, setDateTime] = useState(new Date());
    useInterval(() => setDateTime(new Date()), 1000);

    return dateTime;
};

export default useClock;
