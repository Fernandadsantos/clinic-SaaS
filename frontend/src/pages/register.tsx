import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Step, StepLabel, Stepper, Typography, CircularProgress } from "@mui/material";
import { FormDataRegister } from "../interfaces";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Dados da Clínica', 'Escolha seu plano', 'Pagamento', 'Revisão'];

    const [formData, setFormData] = useState<FormDataRegister>({
        email: "",
        password: "",
        confirmPassword: "",
        clinicName: "",
        cnpj: "",
        userName: "",
        selectedPlan: "basic",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectPlan = (plan: string) => {
        setFormData({ ...formData, selectedPlan: plan });
    };

    const validateStep = (step: number): boolean => {
        if (step === 0) {
            if (!formData.clinicName || !formData.userName || !formData.email || !formData.password) {
                setError("Preencha todos os campos obrigatórios (*)");
                return false;
            }
            if (formData.password !== formData.confirmPassword) {
                setError("As senhas não coincidem.");
                return false;
            }
        }
        setError(null);
        return true;
    };

    const handleNext = () => {
        if (validateStep(activeStep)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setError(null);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            console.log("Enviando dados para API:", formData);

            await new Promise(resolve => setTimeout(resolve, 2000));

            alert("Conta criada com sucesso! Verifique seu email.");
            navigate("/login");

        } catch (error: Error | unknown) {
            console.error("Erro no registro:", error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            setError("Erro ao criar conta: " + errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Clínica *</label>
                            <input
                                type="text"
                                name="clinicName"
                                value={formData.clinicName}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                placeholder="Ex: Clínica Saúde Total"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ (Opcional)</label>
                            <input
                                type="text"
                                name="cnpj"
                                value={formData.cnpj}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                placeholder="00.000.000/0001-00"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome (Admin) *</label>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail Corporativo *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Senha *</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <Typography variant="h6" className="text-center pb-2">Selecione o porte da sua clínica</Typography>
                        <div className="grid gap-4">
                            {/* Card Básico */}
                            <div
                                onClick={() => handleSelectPlan('basic')}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.selectedPlan === 'basic' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-200'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-800">Básico (Grátis)</span>
                                    <div className={`h-4 w-4 rounded-full border ${formData.selectedPlan === 'basic' ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Até 5 usuários • Gestão básica</p>
                            </div>

                            {/* Card Profissional */}
                            <div
                                onClick={() => handleSelectPlan('pro')}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.selectedPlan === 'pro' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-200'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-800">Profissional (R$ 199/mês)</span>
                                    <div className={`h-4 w-4 rounded-full border ${formData.selectedPlan === 'pro' ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Até 15 usuários • Relatórios • Suporte</p>
                            </div>

                            {/* Card Enterprise */}
                            <div
                                onClick={() => handleSelectPlan('ent')}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.selectedPlan === 'ent' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-200'}`}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-gray-800">Enterprise (R$ 299/mês)</span>
                                    <div className={`h-4 w-4 rounded-full border ${formData.selectedPlan === 'ent' ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Até 100 usuários • Relatórios • Suporte • Dashboard completo </p>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4 animate-fadeIn text-center py-6">
                        <div className="bg-gray-100 p-6 rounded-lg border border-gray-300 border-dashed">
                            <Typography color="textSecondary">Integração com Stripe</Typography>
                            <p className="text-sm text-gray-500 mt-2">
                                (Neste passo você renderizaria o componente do Stripe Elements ou similar)
                            </p>
                        </div>
                        <p className="text-xs text-gray-500">Seus dados estão seguros e criptografados.</p>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="bg-emerald-50 p-4 rounded-lg">
                            <h3 className="font-bold text-emerald-800 mb-2">Resumo do Cadastro</h3>
                            <ul className="text-sm text-emerald-700 space-y-1">
                                <li><strong>Clínica:</strong> {formData.clinicName}</li>
                                <li><strong>Admin:</strong> {formData.userName} ({formData.email})</li>
                                <li><strong>Plano:</strong> {formData.selectedPlan?.toUpperCase()}</li>
                            </ul>
                        </div>
                        <p className="text-sm text-center text-gray-600">
                            Ao clicar em finalizar, você concorda com os Termos de Uso do ClinicOps.
                        </p>
                    </div>
                );
            default:
                return "Passo desconhecido";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-300 to-green-500 p-4">
            <div className="max-w-xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">

                <div className="bg-gray-50 p-6 border-b border-gray-100">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {activeStep === steps.length - 1 ? 'Quase lá!' : 'Criar Conta'}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            {activeStep === 0 ? 'Cadastre sua clínica gratuitamente' : 'Configure sua assinatura'}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    <div className="min-h-[300px]">
                        {renderStepContent(activeStep)}
                    </div>

                    <div className="mt-8 flex justify-between pt-4 border-t border-gray-100">
                        <Button
                            disabled={activeStep === 0 || loading}
                            onClick={handleBack}
                            sx={{ color: "green" }}
                            variant="outlined"
                        >
                            Voltar
                        </Button>

                        {activeStep === steps.length - 1 ? (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="bg-emerald-600 hover:bg-emerald-700 min-w-[140px]"
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Finalizar Cadastro'}
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                sx={{
                                    backgroundColor: '#059669',
                                    '&:hover': { backgroundColor: '#047857' }
                                }}
                            >
                                Próximo
                            </Button>
                        )}
                    </div>
                </div>

                <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                        Já tem uma conta?{" "}
                        <Link to="/login" className="text-emerald-600 hover:underline font-medium">
                            Faça login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}