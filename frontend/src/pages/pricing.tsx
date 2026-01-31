import { Skeleton } from "@mui/material";
import CardsPricing from "../components/pricingCards";
import Footer from "../components/footer";
import Header from "../components/header";
import { Icons } from "../icons/icons";
import { PricingCardsProps } from "../interfaces";
import { useEffect, useState } from "react";

export default function Pricing() {
    const cards: PricingCardsProps[] = [
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
            title: "Basico",
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

    const [card, setCard] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCard(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="min-h-screen text-center">
            <Header btnText1="Entrar" btnText2="Criar Conta" />
            <section className="py-12 sm:py-20 bg-green-50">
                <div className="">
                    <div className='text-6xl font-bold '>
                        <h1 className=' bg-gray-800 bg-clip-text text-transparent'>Gestão Completa</h1>
                        <h1 className=' bg-green-700 bg-clip-text text-transparent'>para sua Clínica</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-10 items-center">
                        {
                            card && cards ? (
                                cards.map((card) => {
                                    return (
                                        <CardsPricing
                                            title={card.title}
                                            description={card.description}
                                            price={card.price}
                                            isBasic={card.isBasic}
                                            path={card.path}
                                            resoures={card.resoures}
                                        />
                                    )
                                })
                            ) : (
                                <Skeleton variant="rectangular" width={400} height={700} className="rounded-xl" />

                            )}
                    </div>
                </div>
            </section>

            {/* <div className="">
                <Footer />
            </div> */}
        </div>
    );
}