import { useEffect } from "react";

import Header from "./components/Header";
import Country from "./components/Country";
import Weather from "./components/Weather";
import WeatherMap from "./components/WeatherMap";

import Loading from "./elements/Loading";
import Error from "./elements/Error";

import { useWeather } from "./hooks/useWeather";
import { useLocation } from "./hooks/useLocation";

function App() {
    const { location } = useLocation();
    const { weather, loading, error, updateWeather } = useWeather();

    const visibility = weather && location && !error && !loading;

    useEffect(() => {
        if (!location) return;

        updateWeather(location);
    }, [location]);

    return (
        <>
            <Header />
            <main>
                <div className="max-w-screen-md mx-auto flex flex-col gap-10 my-10 p-4">
                    {visibility && (
                        <>
                            <Country resWeather={weather} />
                            <Weather resWeather={weather} />
                            <WeatherMap location={location} />
                        </>
                    )}
                    {loading && <Loading />}
                    {error && <Error />}
                </div>
            </main>
        </>
    );
}

export default App;
