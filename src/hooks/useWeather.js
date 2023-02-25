import { useCallback, useState } from "react";

import { getWeather } from "../services/weather";

export function useWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateWeather = useCallback(async ({ lat, lon }) => {
        try {
            setLoading(true);

            const newWeather = await getWeather({ lat, lon });
            setWeather(newWeather);
        } catch (err) {
            setError(err);
            throw new Error(`Get newWeather from service. ${err}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { weather, loading, error, updateWeather };
}
