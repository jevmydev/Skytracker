import debounce from "just-debounce-it";
import { useCallback, useRef } from "react";

import HeaderSuggestion from "./HeaderSuggestion";

import { useLocation } from "../../hooks/useLocation";

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

export default HeaderSearch;
