export function CountryTimeData({ data, icon: Icon, image, ...props }) {
    return (
        <h3 className="flex items-center gap-1" {...props}>
            {Icon && <Icon stroke="stroke-red-200" />}
            {image && <img src={image} alt={`Imagen del clima actual sobre ${data}`} />}
            {data}
        </h3>
    );
}

export default CountryTimeData;
