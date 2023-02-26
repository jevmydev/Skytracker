import CountryTimeData from "../../elements/CountryTimeData";
import { CalendarIcon, LocationIcon } from "../../elements/Icons";

export function Country({ resWeather }) {
    const { fullPlace, date } = resWeather;
    const [fullDate, hour] = date;

    return (
        <section>
            <h2 className="font-bold text-zinc-400 mb-4">Información local</h2>

            <div className="flex flex-col md:items-end md:flex-row justify-between gap-4 font-bold text-xl">
                <div className="flex flex-col gap-2">
                    <div className="text-6xl text-sky-200">
                        <CountryTimeData data={hour} />
                    </div>
                    <CountryTimeData data={fullDate} icon={CalendarIcon} />
                </div>
                <div>
                    <CountryTimeData data={fullPlace} icon={LocationIcon} />
                </div>
            </div>
        </section>
    );
}

export default Country;
