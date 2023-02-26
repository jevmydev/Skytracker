import CountryTimeData from "../elements/CountryTimeData";

export function ForecastItem({ forecast }) {
    const { temp, icon, date } = forecast;
    const [fullDate, hour] = date;

    return (
        <li>
            <div className="bg-zinc-800 w-32 h-full rounded p-4 flex flex-col gap-4">
                <div className="flex flex-col items-center justify-center">
                    <CountryTimeData image={icon} />
                    <CountryTimeData data={hour} />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <CountryTimeData data={temp} />
                    <CountryTimeData data={fullDate} />
                </div>
            </div>
        </li>
    );
}

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
