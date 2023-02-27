import Button from "../../elements/Button";

export function LocationSuggestion({ location }) {
    const { place } = location;

    return (
        <li>
            <Button type="submit">{place}</Button>
        </li>
    );
}

export default LocationSuggestion;
