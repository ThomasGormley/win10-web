import { useState, useEffect } from 'react';

const defaultSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0,
};

const useGeoPosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({ coords, timestamp }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            speed: coords.speed,
            timestamp,
        });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError('Geolocation is not supported');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            onChange,
            onError,
            defaultSettings,
        );
    }, []);

    return { ...position, error };
};

export default useGeoPosition;
