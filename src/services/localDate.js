import { LOCALDATE_URL } from "../utils/const";

export async function getLocalDate({ lat, lon }) {
    if (!lat || !lon) return;

    try {
        const response = await fetch(`${LOCALDATE_URL}?key=${import.meta.env.VITE_TIMEZONE_APIKEY}&format=json&by=position&lat=${lat}&lng=${lon}`);
        const date = await response.json();
        const { formatted } = date;

        return formatted;
    } catch (err) {
        throw new Error("Fetch to timezonedb");
    }
}
