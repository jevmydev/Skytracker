import { useEffect, useContext } from "react";

import { DEFAULT_POSITION } from "../utils/const";

import { LocationContext } from "../context/location";

export function useLocation() {
    const { location, setLocation } = useContext(LocationContext);

    useEffect(() => {
        const getCurrentPositionSuccess = ({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ lat: latitude, lon: longitude });
        };

        const getCurrentPositionError = () => setLocation(DEFAULT_POSITION);

        navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionError);
    }, []);

    return { location, setLocation };
}
