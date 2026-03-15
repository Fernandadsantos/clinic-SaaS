import { Icons } from "../icons/icons";
import Btn from "./btn";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                <Icons.Stethoscope />
                            </div>
                            <span className="text-xl font-bold text-white">ClinicSaaS</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Plataforma SaaS Multi-tenant para gestão de clínicas
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-green-400 mb-4">PRODUTO</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Btn text="Funcionalidades" size="small" path="/#recursos" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                            <li>
                                <Btn text="Preços" path="/planos" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                            <li>
                                <Btn text="Segurança" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-green-400 mb-4">EMPRESA</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Btn text="Sobre" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />

                            </li>
                            <li>
                                <Btn text="Blog" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                            <li>
                                <Btn text="Contato" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-green-400 mb-4">LEGAL</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Btn text="Privacidade" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                            <li>
                                <Btn text="Termos" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                            <li>
                                <Btn text="LGPD" path="/" size="small" variant="text" btnColor="success" textColor="text-white hover:text-green-400 transition-colors" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                    <p>© 2026 ClinicSaaS - Plataforma SaaS Multi-tenant</p>
                    <p className="mt-2">Desenvolvido pro Fernanda Santos para Case Técnico</p>
                </div>
            </div>
        </footer>
    );
}