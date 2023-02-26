import Anchor from "../elements/Anchor";

export function Footer() {
    return (
        <footer>
            <div className="max-w-screen-md mx-auto p-4 flex flex-wrap items-center justify-between gap-4">
                <p className="flex flex-wrap gap-2 items-center">
                    Desarrollado por
                    <span className="flex gap-2 font-bold text-sky-200">
                        <Anchor href="https://jeremydiaz.netlify.app/" target="_blank">
                            jevmydev
                        </Anchor>
                    </span>
                </p>
                <Anchor href="https://github.com/jevmydev/skytracker" target="_blank">
                    Código abierto
                </Anchor>
            </div>
        </footer>
    );
}

export default Footer;
