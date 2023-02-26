import { LOCATION_URL } from "../utils/const";

function compromiseForecasts({ resLocation }) {
    return resLocation?.map((location) => {
        const { name, lat, lon } = location;

        return {
            place: name,
            lat,
            lon
        };
    });
}

export async function getLocation({ search = "Santiago de Chile", limit = 3 }) {
    if (!search) return;

    try {
        const res = await fetch(`${LOCATION_URL}?q=${search}&limit=${limit}&appid=${import.meta.env.VITE_WEATHER_APIKEY}`);
        const location = await res.json();

        return compromiseForecasts({ resLocation: location });
    } catch (err) {
        throw new Error("Fetch to search location or compromise location API");
    }
}
