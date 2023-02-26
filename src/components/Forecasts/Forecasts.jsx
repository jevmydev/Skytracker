import ForecastItem from "./ForecastsItem";

export function Forecasts({ forecasts }) {
    return (
        <section>
            <h2 className="font-bold text-zinc-400 mb-4">Pronóstico</h2>
            <ul className="flex gap-2 relative overflow-auto py-4">
                {forecasts.map((forecast) => (
                    <ForecastItem key={forecast.id} forecast={forecast} />
                ))}
            </ul>
        </section>
    );
}

export default Forecasts;
