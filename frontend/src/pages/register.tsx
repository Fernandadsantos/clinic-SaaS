import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormDataRegister } from "../interfaces";
import { Button } from "@mui/material";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormDataRegister>({
        email: "",
        password: "",
        confirmPassword: "",
        clinicName: "",
        cnpj: "",
        userName: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {


        } catch (error: Error | unknown) {
            console.error("Error loading appointments:", error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            alert("Error loading appointments: " + errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-300 to-green-500">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <div>
                    <h2 className="text-3xl font-bold text-center text-gray-900">
                        Criar Conta
                    </h2>
                    <p className="mt-2 text-center text-gray-600">
                        Cadastre sua clínica gratuitamente
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome da Clínica *
                        </label>
                        <input
                            type="text"
                            name="nomeClinica"
                            required
                            value={formData.clinicName}
                            onChange={handleChange}
                            placeholder="Ex: Clínica São Paulo"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            CNPJ (opcional)
                        </label>
                        <input
                            type="text"
                            name="cnpj"
                            value={formData.cnpj}
                            onChange={handleChange}
                            placeholder="00.000.000/0001-00"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Seu Nome *
                        </label>
                        <input
                            type="text"
                            name="nomeUsuario"
                            required
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Ex: João Silva"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail *
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Senha *
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mínimo 6 caracteres"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmar Senha *
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Digite a senha novamente"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        disabled={loading}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                        {loading ?
                            (
                                <>
                                    <span className="flex gap-2 items-center text-green-900 font-semibold">
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                                        Criando conta
                                    </span>
                                </>
                            )
                            :
                            (
                                <p className="font-bold">
                                    Criar Conta Grátis
                                </p>
                            )
                        }
                    </Button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Já tem uma conta?{" "}
                    <Link
                        to="/login"
                        className="text-green-800 hover:underline font-medium"
                    >
                        Faça login
                    </Link>
                </p>
                <div className="mt-4 text-center">
                    <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
                        ← Voltar ao início
                    </Link>
                </div>
            </div>
        </div>
    );
}