import Button from "../../elements/Button";

export function HeaderSuggestion({ location }) {
    const { place } = location;

    return (
        <li>
            <Button type="submit">{place}</Button>
        </li>
    );
}

export default HeaderSuggestion;
