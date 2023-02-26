import debounce from "just-debounce-it";
import { useCallback, useRef } from "react";

import Button from "../elements/Button";
import { SunIcon } from "../elements/Icons";

import { useLocation } from "../hooks/useLocation";

export function HeaderSuggestion({ location }) {
    const { place } = location;

    return (
        <li>
            <Button type="submit">{place}</Button>
        </li>
    );
}

export function HeaderSearch() {
    const { locationSearch, clearLocationSearch, getLocationSearch, updateLocation } = useLocation();
    const searchRef = useRef();

    const debounceGetLocationSearch = useCallback(
        debounce(({ search }) => getLocationSearch({ search }), 300),
        []
    );

    const handleChange = () => {
        const search = searchRef.current.value;
        debounceGetLocationSearch({ search });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (locationSearch?.length === 0 || !locationSearch) return;

        const { lat, lon } = locationSearch[0];
        updateLocation({ lat, lon });

        clearLocationSearch();
    };

    return (
        <form className="relative" autoComplete="off" onSubmit={handleSubmit}>
            <input
                className="bg-zinc-800 outline-none py-2 px-4 rounded w-full transition-colors focus:bg-zinc-700"
                type="text"
                name="search"
                placeholder="Busca lugares..."
                onChange={handleChange}
                ref={searchRef}
            />
            {locationSearch && (
                <div className="absolute w-full bg-zinc-600 my-2 p-4 rounded">
                    <ul className="flex flex-col gap-2">
                        {locationSearch.map((location, i) => (
                            <HeaderSuggestion key={`Suggestion ${i}`} location={location} />
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
}

export function Header() {
    return (
        <header>
            <div className="max-w-screen-md mx-auto p-4 gap-4 flex flex-col sm:flex-row sm:items-center justify-between">
                <h1>
                    <a className="flex items-center gap-2 text-2xl font-bold" href="/">
                        <SunIcon stroke="stroke-sky-200" />
                        SkyTracker
                    </a>
                </h1>
                <HeaderSearch />
            </div>
        </header>
    );
}

export default Header;
