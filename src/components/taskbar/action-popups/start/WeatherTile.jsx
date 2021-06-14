import { useEffect, useState } from 'react';
import useFetch from '../../../../hooks/useFetch';
import useGeoPosition from '../../../../hooks/useGeoPosition';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherTile = ({ config }) => {
    const { tile } = config;
    // defaults to London
    const [coord, setCoord] = useState({
        longitude: -6.243,
        latitude: 55.2044,
    });

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${API_KEY}&units=metric`;
    const { response: weather, loading, error } = useFetch(weatherUrl, {});

    const { latitude, longitude, error: geoError } = useGeoPosition();

    useEffect(() => {
        if (!geoError) {
            setCoord({
                longitude,
                latitude,
            });
        }
    }, [geoError, latitude, longitude]);

    return (
        <div
            className="flex flex-col w-full h-24 bg-blue-600 hover:ring hover:ring-white hover:ring-inset hover:ring-opacity-60 hover:transition hover:duration-75"
            style={{
                gridColumn: `span ${tile['col-span']} / span ${tile['col-span']}`,
                gridRow: `span ${tile['row-span']} / span ${tile['row-span']}`,
            }}
        >
            {!loading && !error && (
                <>
                    <div className="flex items-center justify-between flex-grow px-3">
                        <img
                            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                            alt={`${weather?.weather[0].main} weather`}
                            className="w-16 h-16"
                        />
                        <span className="font-medium">
                            {Math.round(weather?.main.temp)}°C
                        </span>
                        <span>{weather?.weather[0].main}</span>
                    </div>
                    <p className="p-2 text-xs">{weather.name}</p>
                </>
            )}
        </div>
    );
};

export default WeatherTile;
