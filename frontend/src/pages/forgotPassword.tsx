import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Icons } from "../icons/icons";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email.trim()) {
            alert("❌ Por favor, informe seu email");
            return;
        }

        try {
            setLoading(true);
            // Simulação de envio
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSuccess(true);
        } catch (error: Error | unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.error("Error:", error);
            alert("Erro : " + errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 pb-6 text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow-inner">
                            <Icons.key className="h-8 w-8 text-green-600" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Recuperar Senha
                        </h2>
                        <p className="text-gray-600 mt-2 text-base">
                            {success
                                ? "Email enviado com sucesso!"
                                : "Digite seu email para receber o link de recuperação"}
                        </p>
                    </div>
                </div>

                <div className="px-8 pb-8">
                    {success ? (
                        <div className="space-y-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icons.check className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-900 text-sm mb-1">
                                            Email Enviado!
                                        </h3>
                                        <p className="text-xs text-green-700 leading-relaxed">
                                            Enviamos um link de recuperação para{" "}
                                            <strong>{email}</strong>. Verifique sua caixa de entrada e spam.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm font-semibold text-blue-900 mb-2">
                                    📧 O que fazer agora:
                                </p>
                                <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside pl-1">
                                    <li>Abra seu email</li>
                                    <li>Clique no link de recuperação</li>
                                    <li>Defina sua nova senha</li>
                                </ol>
                            </div>

                            <div className="space-y-3 pt-2">
                                <button
                                    onClick={() => navigate("/login")}
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                                >
                                    <Icons.arrowLeft className="h-4 w-4" />
                                    Voltar ao Login
                                </button>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Reenviar Email
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 ml-1"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <Icons.mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder-gray-400 text-gray-900"
                                        required
                                        disabled={loading}
                                    />
                                </div>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
                                <span className="text-lg">💡</span>
                                <p className="text-sm text-yellow-800 leading-relaxed pt-0.5">
                                    Enviaremos um link para redefinir sua senha. O link expira em 1 hora.
                                </p>
                            </div>
                            <div className="space-y-3 pt-2">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Icons.send className="h-4 w-4" />
                                            Enviar Link de Recuperação
                                        </>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                    onClick={() => navigate("/login")}
                                    disabled={loading}
                                >
                                    <Icons.arrowLeft className="h-4 w-4" />
                                    Voltar ao Login
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-600">
                            Lembrou sua senha?{" "}
                            <Link
                                to="/login"
                                className="text-green-600 hover:text-green-700 font-semibold hover:underline transition-colors"
                            >
                                Fazer login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}