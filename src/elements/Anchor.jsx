export function Anchor({ href = "/", target = "_self", ...props }) {
    return <a className="bg-zinc-800 py-2 px-4 rounded transition-colors hover:bg-zinc-700" href={href} target={target} {...props} />;
}
