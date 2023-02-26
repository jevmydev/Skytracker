import { useCallback, useState } from "react";

import { getForecasts } from "../services/forecasts";

export function useForecasts() {
    const [forecasts, setForecasts] = useState(null);

    const updateForecasts = useCallback(async ({ lat, lon }) => {
        try {
            const newForecast = await getForecasts({ lat, lon });
            setForecasts(newForecast);
        } catch (err) {
            throw new Error(`Get newForecast from service. ${err}`);
        }
    }, []);

    return { forecasts, updateForecasts };
}
