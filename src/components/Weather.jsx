import CountryTimeData from "../elements/CountryTimeData";
import { FeelsLikeIcon, HumidityIcon, TemperatureIcon, TemperatureMaxIcon, TemperatureMinIcon } from "../elements/Icons";

export function Weather({ resWeather }) {
    const { temp, description, icon, humidity, minTemp, maxTemp, sunrise, sunset, likeTemp } = resWeather;

    return (
        <section>
            <h2 className="font-bold text-zinc-400 mb-4">Tiempo y clima</h2>

            <div className="bg-zinc-800 flex-1 p-4 flex flex-col gap-10">
                <div className="flex flex-wrap justify-between font-bold text-xl">
                    <div className="text-6xl text-sky-200">
                        <CountryTimeData data={temp} />
                    </div>
                    <div>
                        <CountryTimeData data={description} image={icon} />
                    </div>
                </div>
                <div className="text-base text-zinc-300 flex flex-wrap items-start gap-10">
                    <div>
                        <CountryTimeData data={`Sensación: ${likeTemp}`} icon={TemperatureIcon} />
                        <CountryTimeData data={`Máxima: ${maxTemp}`} icon={TemperatureMaxIcon} />
                        <CountryTimeData data={`Mínima: ${minTemp}`} icon={TemperatureMinIcon} />
                        <CountryTimeData data={`Humedad: ${humidity}`} icon={HumidityIcon} />
                    </div>
                    <div>
                        <CountryTimeData data={`Salida del sol: ${sunrise}`} icon={FeelsLikeIcon} />
                        <CountryTimeData data={`Puesta del sol: ${sunset}`} icon={FeelsLikeIcon} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weather;
