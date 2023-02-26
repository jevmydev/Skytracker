export function Button({ onClick, type = "button", ...props }) {
    return <button className="bg-zinc-800 w-full text-left py-2 px-4 rounded transition-colors hover:bg-zinc-700" onClick={onClick} type={type} {...props} />;
}

export default Button;
