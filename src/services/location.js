import { LOCATION_URL } from "../utils/const";

function compromiseLocation({ resLocation }) {
    return resLocation?.map((location) => {
        const { name, country, lat, lon } = location;

        return {
            place: `${name}, ${country}`,
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

        return compromiseLocation({ resLocation: location });
    } catch (err) {
        throw new Error("Fetch to search location or compromise location API");
    }
}
