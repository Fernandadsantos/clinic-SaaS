import Header from "../components/header";
// import Footer from "../components/footer";
import Carousel from "../components/carousel";
import { PricingCardsProps } from "../interfaces";

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
            <Header btnText1="Entrar" btnText2="Criar Conta" />

            <section className="py-12 sm:py-20">
                <div className="container mx-auto px-4">
                    <div className='text-4xl md:text-6xl font-bold mb-10'>
                        <h1 className='bg-gray-800 bg-clip-text text-transparent'>Gestão Completa</h1>
                        <h1 className='bg-green-700 bg-clip-text text-transparent'>para sua Clínica</h1>
                    </div>

                    <div className="w-full mt-10">
                        <Carousel cards={cards} />
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </div>
    );
}