import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Btn from '../components/btn';
import { Icons } from '../icons/icons';
import { CardsContentProps } from "../interfaces/index"
import BasicCard from '../components/BasicCard';
import Footer from '../components/footer';
import FloatingButton from '../components/flaotingButtom';

export default function LandingPage() {
    const cardsContent: CardsContentProps[] = [
        {
            title: "Multi-Tenancy Seguro",
            description: "Segregação total de dados entre clínicas com Row Level Security (RLS)",
            resources: [
                "Isolamento de dados por clínica",
                "Criptografia end-to-end",
                "Auditoria completa"
            ],
            typeIcon: "shield"
        },
        {
            title: "Gestão de Pacientes",
            description: "Cadastro completo com histórico de atendimentos e prontuários",
            resources: [
                "Prontuário eletrônico",
                "Histórico completo",
                "Anexos e documentos"
            ],
            typeIcon: "users"
        },
        {
            title: "Agenda Inteligente",
            description: "Sistema de agendamento com notificações automáticas",
            resources: [
                "Agendamento online",
                "Lembretes automáticos",
                "Confirmação por WhatsApp"
            ],
            typeIcon: "calendar"
        },
        {
            title: "Dashboard Analítico",
            description: "Métricas e indicadores em tempo real",
            resources: [
                "KPIs personalizados",
                "Relatórios financeiros",
                "Análise de desempenho"
            ],
            typeIcon: "chart"
        },
        {
            title: "Gestão Financeira",
            description: "Controle completo de receitas e despesas",
            resources: [
                "Controle de pagamentos",
                "Integração bancária",
                "Notas fiscais automáticas"
            ],
            typeIcon: "fileText"
        },
        {
            title: "Telemedicina",
            description: "Consultas online integradas à plataforma",
            resources: [
                "Videochamadas seguras",
                "Videochamadas seguras",
                "Sala de espera virtual"
            ],
            typeIcon: "stethoscope"
        }
    ]
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <div className="min-h-screen text-center">
            <Header btnText1='Entrar' btnText2='Planos' />
            <div className={`fixed right-5 bottom-5 md:right-10 md:bottom-10 z-[100] ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <FloatingButton />
            </div>
            <section className='relative overflow-hidden py-20 sm:py-28 bg-green-50'>
                <div className='max-w-5xl mx-auto border-b border-green-200 pb-8'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                        <div className='text-center'>
                            <div className='text-7xl font-bold'>
                                <h1 className=' bg-gray-800 bg-clip-text text-transparent'>Gestão Completa</h1>
                                <h1 className=' bg-green-700 bg-clip-text text-transparent'>para sua Clínica</h1>
                            </div>
                            <p className="text-xl text-gray-600 mt-8 mb-20 max-w-2xl mx-auto">
                                Simplifique a operação da sua clínica com nossa plataforma segura,
                                escalável e em conformidade com a LGPD
                            </p>
                        </div>
                        <div className='flex gap-4 justify-center mb-5'>
                            <Btn text='Começar gratuitamente' variant="contained" path='planos' size='large' btnColor="success" />
                            <a href="#recursos">
                                <Btn text='Conhecer recursos' variant="outlined" path='/#recursos' size='large' btnColor="success" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-12 mb-16 px-4'>
                    <p className='text-base text-gray-500 mt-5 mb-8 max-w-2xl mx-auto'>
                        Sistema de confiança usado em todo o Brasil
                    </p>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16'>
                        <div className='flex gap-2 items-center'>
                            <Icons.shield className="h-6 w-6 text-green-600" />
                            <p className="font-medium text-gray-700">LGPD Compliant</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <Icons.check className="h-6 w-6 text-green-600" />
                            <p className="font-medium text-gray-700">ISO 27001</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Icons.plus className="h-6 w-6 text-green-600" />
                            <p className="font-medium text-gray-700">10.000 clínicas</p>
                        </div>

                    </div>
                </div>
            </section>
            <section id='recursos' className='py-16'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-16'>

                    {/* Cabeçalho */}
                    <div className='text-center mb-12'>
                        <h1 className='text-3xl md:text-4xl font-bold bg-green-700 bg-clip-text text-transparent mb-6'>
                            Tudo que você precisa para gerenciar a sua clínica
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Ferramentas poderosas desenvolvidas especificamente para o setor de saúde
                        </p>
                    </div>

                    {/* Grid de Cards Responsivo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                        {cardsContent?.map((card, index) => (
                            <div key={index} className="flex justify-center w-full">
                                <BasicCard
                                    typeIcon={card.typeIcon}
                                    title={card.title}
                                    description={card.description}
                                    resources={card.resources}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Pronto para Modernizar sua Clínica?
                    </h3>
                    <p className="text-xl text-green-50 mb-8">
                        Comece gratuitamente hoje e escolha o plano ideal para seu negócio
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Btn size="large" text='Ver Planos e Preços' path='/planos' variant="contained" btnColor="success" />
                        <Btn size='large' text='Criar Conta Gratuita' path='/cadastro' variant="contained" btnColor="warning" />
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    );
}
