import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                if (!res.ok) throw Error(res.status);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { response, loading, error };
};

export default useFetch;
