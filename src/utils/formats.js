export function formatTemp({ temp }) {
    const tempWithoutDecimal = Math.trunc(temp);
    const formattedTemp = tempWithoutDecimal + "°C";

    return formattedTemp;
}

export function formatDate({ date }) {
    const newDate = new Intl.DateTimeFormat("es-ES", {
        dateStyle: "full",
        timeStyle: "short"
    }).format(date);

    const splittedDate = newDate.split(",");
    const [fullDate, hour] = [splittedDate.slice(0, 2).join(","), splittedDate[2].trim()];

    const fullDateFormat = capitalize({ text: fullDate });
    return [fullDateFormat, hour];
}

export function formatSplitComma({ text }) {
    return text.split(" ").join(", ");
}

export function formatPercentage({ value }) {
    return value + "%";
}

export function capitalize({ text }) {
    return text.charAt().toUpperCase() + text.slice(1);
}
