import { WEATHER_URL, WEATHER_URL_ICON } from "../utils/const";
import { formatTemp, formatPercentage, formatSplitComma, capitalize, formatDate } from "../utils/formats";

function compromiseWeather({ resWeather }) {
    return resWeather?.map((dataWeather) => {
        const { weather, main, sys, name } = dataWeather;
        const weatherFirst = weather[0];

        return {
            place: name,
            country: sys.country,
            icon: `${WEATHER_URL_ICON}${weatherFirst.icon}.png`,
            description: capitalize({ text: weatherFirst.description }),
            fullPlace: formatSplitComma({ text: `${name} ${sys.country}` }),
            temp: formatTemp({ temp: main.temp }),
            maxTemp: formatTemp({ temp: main.temp_max }),
            minTemp: formatTemp({ temp: main.temp_min }),
            likeTemp: formatTemp({ temp: main.feels_like }),
            humidity: formatPercentage({ value: main.humidity }),
            sunrise: formatDate(new Date(sys.sunrise))[1],
            sunset: formatDate(new Date(sys.sunset))[1]
        };
    })[0];
}

export async function getWeather({ lat = 10, lon = 10, lang = "es", units = "metric" }) {
    if (!lat || !lon) return;

    try {
        const res = await fetch(`${WEATHER_URL}?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&appid=${import.meta.env.VITE_WEATHER_APIKEY}`);
        const weather = await res.json();

        return compromiseWeather({ resWeather: [weather] });
    } catch (err) {
        throw new Error("Fetch to weather or compromise API");
    }
}
