import { Icons } from "../icons/icons";
import Btn from "./btn";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-green-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex space-x-2 items-center">
                        <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Icons.stethoscope />
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <h1 className='text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent'>Clinic</h1>
                            <h2 className='text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>SaaS</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Btn text="Entrar" path="/login" variant="outlined" />
                        <Btn text="Ver planos" path="/planos" variant="contained" />
                    </div>
                </div>
            </div>
        </header>
    );
}
