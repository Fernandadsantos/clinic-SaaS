import { Skeleton } from "@mui/material";
import PricingCards from "../components/pricingCards";
import Footer from "../components/footer";
import Header from "../components/header";
import { Icons } from "../icons/icons";
import { PricingCardsProps } from "../interfaces";
import { useEffect, useState } from "react";
import Carousel from "../components/carousel";

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

    return (
        <div className="min-h-screen text-center">
            <Header btnText1="Entrar" btnText2="Criar Conta" />
            <section className="py-12 sm:py-18 bg-green-50 min-h-screen">
                <div>
                    <div>
                        <div className='text-6xl font-bold mb-10'>
                            <h1 className=' bg-gray-800 bg-clip-text text-transparent'>Escolha o Plano</h1>
                            <h1 className=' bg-green-700 bg-clip-text text-transparent'>Ideal para sua Clínica</h1>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-3 justify-center  mb-2">
                                <p className='text-xl font-light'>Pagamento seguro processado pelo Stripe</p>
                                <Icons.lock className="h-5 w-5" />
                            </div>
                            <p className='text-base text-gray-500 font-normal'>Todos os planos incluem 14 dias de teste grátis • Cancele quando quiser</p>
                        </div>
                    </div>
                    <div className="items-center">
                        <div className="gap-8 w-full max-w-7xl mx-auto mt-10 items-center">
                            <Carousel cards={cards} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="">
                <Footer />
            </div>
        </div>
    );
}