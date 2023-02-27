import { useState, useEffect } from "react";

export const useWeatherRecommendations = ({ state }) => {
    const [recommendations, setRecommendations] = useState(null);

    useEffect(() => {
        switch (state) {
            case "Clear":
                setRecommendations(["Usar ropa fresca y ligera, como camisetas, shorts y sandalias.", "Hacer actividades al aire libre, como ir a la playa o al parque."]);
                break;
            case "Clouds":
                setRecommendations(["Usar ropa cómoda y abrigada, como suéteres y pantalones.", "Visitar museos o ir al cine."]);
                break;
            case "Rain":
                setRecommendations(["Usar ropa impermeable, como un paraguas y botas de lluvia.", "Visitar galerías de arte o hacer planes en interiores."]);
                break;
            case "Snow":
                setRecommendations(["Usar ropa abrigada y a prueba de agua, como abrigos gruesos, guantes y botas de nieve.", "Disfrutar de deportes invernales como el esquí o el snowboard."]);
                break;
            default:
                setRecommendations(null);
        }
    }, [state]);

    return { recommendations };
};
