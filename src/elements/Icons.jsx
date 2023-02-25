export function SunIcon({ width = "w-12", height = "h-12", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
    );
}

export function LocationIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
    );
}

export function FeelsLikeIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="3" />
            <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" />
        </svg>
    );
}

export function TemperatureIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="10" y1="9" x2="14" y2="9" />
        </svg>
    );
}

export function TemperatureMaxIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="8" y1="9" x2="12" y2="9" />
            <line x1="16" y1="9" x2="22" y2="9" />
            <line x1="19" y1="6" x2="19" y2="12" />
        </svg>
    );
}

export function HumidityIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
        </svg>
    );
}

export function TemperatureMinIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="8" y1="9" x2="12" y2="9" />
            <line x1="16" y1="9" x2="22" y2="9" />
        </svg>
    );
}

export function CalendarIcon({ width = "w-6", height = "h-6", stroke = "stroke-current" }) {
    return (
        <svg className={`${width} ${height} ${stroke}`} viewBox="0 0 24 24" stroke="none" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <line x1="11" y1="15" x2="12" y2="15" />
            <line x1="12" y1="15" x2="12" y2="18" />
        </svg>
    );
}
