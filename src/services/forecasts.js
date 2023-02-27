import { FORECASTS_URL, WEATHER_URL_ICON } from "../utils/const";
import { formatTemp, formatDate } from "../utils/formats";

function compromiseForecasts({ forecasts }) {
    return forecasts?.map((forecast) => {
        const { main, weather, dt, dt_txt } = forecast;
        const weatherFirst = weather[0];

        return {
            id: dt,
            icon: `${WEATHER_URL_ICON}${weatherFirst.icon}.png`,
            temp: formatTemp({ temp: main.temp }),
            date: formatDate({ date: new Date(dt_txt), dateStyle: "medium" })
        };
    });
}

export async function getForecasts({ lat = 10, lon = 10, lang = "es", limit = 20, units = "metric" }) {
    if (!lat || !lon) return;

    try {
        const res = await fetch(`${FORECASTS_URL}?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&cnt=${limit}&appid=${import.meta.env.VITE_WEATHER_APIKEY}`);
        const forecasts = await res.json();

        return compromiseForecasts({ forecasts: forecasts?.list });
    } catch (err) {
        throw new Error("Fetch to forecast or compromise forecast API");
    }
}
