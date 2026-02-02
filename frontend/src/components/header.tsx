import { Icons } from "../icons/icons";
import { HeaderProps } from "../interfaces";
import Btn from "./btn";

export default function Header({ btnText1, btnText2 }: HeaderProps) {

    return (
        <header className="sticky top-0 z-50 w-full border-b border-green-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 md:h-20 items-center justify-between gap-2 md:gap-4">
                    <div className="flex space-x-2 items-center min-w-0 flex-shrink-1 cursor-pointer">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Icons.stethoscope className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="items-center gap-0.5 md:gap-1 hidden sm:flex">
                            <h1 className='text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent truncate tracking-tight'>
                                Clinic
                            </h1>
                            <h2 className='text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent truncate tracking-tight'>
                                SaaS
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        <div className="scale-90 sm:scale-100 flex gap-2 sm:gap-3">
                            <Btn text={btnText1} path="/login" variant="outlined" size="medium" btnColor="success" />
                            <Btn text={btnText2} path="/planos" variant="contained" size="medium" btnColor="success" />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}