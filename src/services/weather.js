import { WEATHER_URL, WEATHER_URL_ICON, TRANSFORM_TO_MS } from "../utils/const";
import { formatTemp, formatPercentage, formatSplitComma, capitalize, formatDate } from "../utils/formats";

import { getLocalDate } from "./localDate";

async function compromiseWeather({ resWeather, lon, lat }) {
    const localDate = await getLocalDate({ lon, lat });

    return resWeather?.map((dataWeather) => {
        const { weather, main, sys, name } = dataWeather;
        const weatherFirst = weather[0];

        return {
            place: formatSplitComma({ text: `${name} ${sys?.country}` }),
            icon: `${WEATHER_URL_ICON}${weatherFirst?.icon}.png`,
            date: formatDate({ date: new Date(localDate) }),
            description: capitalize({ text: weatherFirst?.description }),
            temp: formatTemp({ temp: main?.temp }),
            maxTemp: formatTemp({ temp: main?.temp_max }),
            minTemp: formatTemp({ temp: main?.temp_min }),
            likeTemp: formatTemp({ temp: main?.feels_like }),
            humidity: formatPercentage({ value: main?.humidity }),
            sunrise: formatDate({ date: new Date(sys.sunrise * TRANSFORM_TO_MS) })[1],
            sunset: formatDate({ date: new Date(sys.sunset * TRANSFORM_TO_MS) })[1]
        };
    })[0];
}

export async function getWeather({ lat = 10, lon = 10, lang = "es", units = "metric" }) {
    if (!lat || !lon) return;

    try {
        const res = await fetch(`${WEATHER_URL}?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&appid=${import.meta.env.VITE_WEATHER_APIKEY}`);
        const weather = await res.json();

        return compromiseWeather({ resWeather: [weather], lon, lat });
    } catch (err) {
        throw new Error("Fetch to weather or compromise API");
    }
}
