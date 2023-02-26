import { useEffect } from "react";

import Header from "./components/Header";
import Country from "./components/Country";
import Weather from "./components/Weather";
import WeatherMap from "./components/WeatherMap";
import Forecasts from "./components/Forecasts";
import Footer from "./components/Footer";

import Loading from "./elements/Loading";
import Error from "./elements/Error";

import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";
import { useForecasts } from "./hooks/useForecasts";

function App() {
    const { location } = useLocation();
    const { weather, loading, error, updateWeather } = useWeather();
    const { forecasts, updateForecasts } = useForecasts();

    const visibility = weather && location && forecasts && !error && !loading;

    useEffect(() => {
        if (!location) return;

        updateWeather(location);
        updateForecasts(location);
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
                            <Forecasts forecasts={forecasts} />
                        </>
                    )}
                    {loading && <Loading />}
                    {error && <Error />}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
