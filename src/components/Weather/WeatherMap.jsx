export function WeatherMap({ location }) {
    const { lat, lon } = location;

    return (
        <section>
            <h2 className="font-bold text-zinc-400 mb-4">Mapa</h2>

            <iframe className="w-full h-72 rounded" src={`https://api.maptiler.com/maps/basic-v2/?key=${import.meta.env.VITE_WEATHERMAP_APIKEY}#10/${lat}/${lon}`}></iframe>
        </section>
    );
}

export default WeatherMap;
