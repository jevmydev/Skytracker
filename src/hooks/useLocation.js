import { useEffect, useCallback, useContext, useState } from "react";

import { DEFAULT_POSITION } from "../utils/const";

import { LocationContext } from "../context/location";
import { getLocation } from "../services/location";

export function useLocation() {
    const [locationSearch, setLocationSearch] = useState(null);
    const { location, setLocation } = useContext(LocationContext);

    const updateLocation = (location) => setLocation(location);
    const clearLocationSearch = () => setLocationSearch(null);

    const getLocationSearch = useCallback(async ({ search }) => {
        try {
            const newLocation = await getLocation({ search });
            setLocationSearch(newLocation);
        } catch (err) {
            throw new Error(`Get newLocation from service. ${err}`);
        }
    }, []);

    useEffect(() => {
        const getCurrentPositionSuccess = ({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ lat: latitude, lon: longitude });
        };

        const getCurrentPositionError = () => setLocation(DEFAULT_POSITION);

        navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionError);
    }, []);

    return { location, locationSearch, clearLocationSearch, getLocationSearch, updateLocation };
}
