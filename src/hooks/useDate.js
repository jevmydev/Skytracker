import { useState } from "react";

import { formatDate } from "../utils/formats";

export function useDate() {
    const [date, setDate] = useState(new Date());

    const updateDate = ({ time }) => {
        const newDate = new Date(time);
        setDate(newDate);
    };

    const [fullDate, hour] = formatDate({ date });
    return { fullDate, hour, updateDate };
}
