import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginStart, loginSuccess, loginFailure } from "../store/modules/auth/authSlice";
import { Icons } from "../icons/icons";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { isLoading, error } = useAppSelector((state) => state.auth);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        dispatch(loginStart());

        try {

            if (email.toLowerCase() === "fernandassilvasantoss@gmail.com" && password === "123456") {

                const fakeUserPayload = {
                    user: {
                        id: "1",
                        name: "Fernanda Silva",
                        email: email,
                        role: "ROLE_ADMIN" as const,
                        tenantId: "tenant_123"
                    },
                    token: "fake-jwt-token-123456"
                };

                dispatch(loginSuccess(fakeUserPayload));

                navigate("/dashboard");
            } else {
                throw new Error("Credenciais inválidas");
            }

        } catch (error: Error | unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            dispatch(loginFailure(errorMessage));
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Bem-vindo de volta!
                    </h1>
                    <p className="text-gray-600">Entre na sua conta ClinicOps</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                            placeholder="seu@email.com"
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Senha
                        </label>
                        <div className="relative ">
                            <input
                                id="password"
                                type={isVisible ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="••••••••"
                                autoComplete="current-password"
                                minLength={6}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"
                                onClick={() => setIsVisible(!isVisible)}>
                                {
                                    isVisible ? <Icons.Eye /> : <Icons.EyeClosed />
                                }
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
                            ❌ {error}
                        </div>
                    )}

                    <div className="flex items-center justify-between">
                        <Link
                            to="/recuperar_senha"
                            className="text-sm text-green-600 hover:underline"
                        >
                            Esqueceu a senha?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <Icons.Loading />
                                Entrando...
                            </span>
                        ) : (
                            "Entrar"
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Ainda não tem conta?{" "}
                        <Link
                            to="/cadastro"
                            className="text-green-600 hover:text-green-700 font-semibold"
                        >
                            Criar conta grátis
                        </Link>
                    </p>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
                        ← Voltar ao início
                    </Link>
                </div>
            </div>
        </div>
    );
}