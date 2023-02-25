import { Anchor } from "./Anchor";

export function Error() {
    return (
        <div className="w-full h-96 flex flex-col gap-4 items-center justify-center text-center">
            <span className="text-red-200">Lo sentimos, ha ocurrido un error.</span>
            <Anchor href="/">Vuelve a intentarlo</Anchor>
        </div>
    );
}

export default Error;
