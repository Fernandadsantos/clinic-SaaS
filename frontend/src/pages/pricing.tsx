import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import { PricingCardsProps } from "../interfaces";
import { Skeleton } from "@mui/material";
import AssuranceSection from "../components/assuranceSection";
import FaqCard from "../components/faqCard";
import FloatingButton from "../components/floatingButtom";
import ScrollToTop from "../components/scrollToTop";

export default function Pricing() {
    const cards: PricingCardsProps[] = [
        {
            title: "Básico",
            description: "Plano inicial gratuito",
            price: "0",
            isBasic: true,
            path: "/planos/Basico",
            resoures: [
                "Até 5 usuários",
                "Até 1000 pacientes",
                "Atendimentos ilimitados",
                "Conformidade LGPD",
                "Suporte por email",
            ],
        },
        {
            title: "Profissional",
            description: "Ideal para clínicas de médio porte",
            price: "199.90",
            isBasic: false,
            path: "/planos/Profissional",
            resoures: [
                "Até 15 usuários",
                "Até 3000 pacientes",
                "Atendimentos ilimitados",
                "Conformidade LGPD",
                "Suporte por email e telefone",
                "Relatórios avançados",
            ],
        },
        {
            title: "Enterprise",
            description: "Ideal para grandes clínicas",
            price: "399.90",
            isBasic: false,
            path: "/planos/Enterprise",
            resoures: [
                "Até 100 usuários",
                "Até 10000 pacientes",
                "Atendimentos ilimitados",
                "Conformidade LGPD",
                "Suporte prioritário",
                "Relatórios avançados",
                "API completa"
            ],
        },
    ];

    return (
        <div className="min-h-screen text-center bg-green-50">
            <ScrollToTop />
            <Header btnText1="Entrar" btnText2="Criar Conta" path1="/login" path2="/cadastro" />
            <div className={`fixed right-5 bottom-5 md:right-10 md:bottom-10 z-[100]`}>
                <FloatingButton />
            </div>
            <section className="py-12 sm:py-20">
                <div className="container mx-auto px-4">
                    <div className='text-4xl md:text-6xl mb-6'>
                        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                            <span className="block text-gray-900">Escolha o Plano</span>
                            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                Ideal para sua Clínica
                            </span>
                        </h1>
                        <div className="mt-3">
                            <p className="text-xl text-gray-600 mb-4">
                                Pagamento seguro processado pelo Stripe 🔒
                            </p>
                            <p className="text-base text-gray-500">
                                Todos os planos incluem 14 dias de teste grátis • Cancele quando
                                quiser
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        {
                            cards ?
                                (
                                    <Carousel cards={cards} />
                                )
                                :
                                (
                                    <Skeleton height={620} width={500} />
                                )
                        }
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <AssuranceSection title="Pagamento Seguro" description="Processado pelo Stripe com criptografia de ponta a ponta" typeIcon="Shield" />
                    <AssuranceSection title="14 Dias Grátis" description="Teste sem compromisso e cancele quando quiser" typeIcon="Check" />
                    <AssuranceSection title="Suporte Dedicado" description="Nossa equipe está pronta para ajudar você" typeIcon="Users" />
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Perguntas Frequentes
                    </h2>
                    <div className="flex-col ">
                        <FaqCard question="Posso mudar de plano depois?" awnser="Sim! Você pode fazer upgrade ou downgrade a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança." />
                        <FaqCard question="Como funciona o período de teste?" awnser="Você tem 14 dias para testar todos os recursos gratuitamente. Não cobramos nada até o final do período de teste." />
                        <FaqCard question="Posso cancelar a qualquer momento?" awnser="Sim! Não há fidelidade. Cancele quando quiser e seus dados ficam disponíveis por 30 dias após o cancelamento." />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}