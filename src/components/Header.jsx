import { SunIcon } from "../elements/Icons";

export function Header() {
    return (
        <header>
            <div className="max-w-screen-md mx-auto p-4 gap-4 flex flex-col sm:flex-row sm:items-center justify-between">
                <h1>
                    <a className="flex items-center gap-2 text-2xl font-bold" href="/">
                        <SunIcon stroke="stroke-sky-200" />
                        SkyTracker
                    </a>
                </h1>
                <form>
                    <input className="bg-zinc-800 py-2 px-4 rounded w-full" type="text" placeholder="Busca países o lugares..." />
                </form>
            </div>
        </header>
    );
}

export default Header;
