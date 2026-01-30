import React from 'react';
import Header from '../components/header';
import Btn from '../components/btn';
import { Icons } from '../icons/icons';
import { CardsContentProps } from "../interfaces/index"
import BasicCard from '../components/BasicCard';

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
        }
    ]
    return (
        <div className="min-h-screen text-center">
            <Header />
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
                            <Btn text='Começar gratuitamente' variant="contained" path='planos' size='large' />
                            <Btn text='Conhecer recursos' variant="outlined" path='/#recursos' size='large' />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-12 mb-20'>
                    <p className='text-base text-gray-500 mt-5 mb-5 max-w-2xl mx-auto'>Sistema de confiança usado em todo o brasil</p>
                    <div className='flex justify-center gap-10'>
                        <div className='flex'>
                            <Icons.shield />
                            <p>LGPD Compliant</p>
                        </div>
                        <div className='flex'>
                            <Icons.check />
                            <p>ISO 27001</p>
                        </div>
                        <div className='flex'>
                            <Icons.plus className="h-6 w-6 mr-2" />
                            <p>10.000 clínicas</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='recursos'>
                <div className='max-w-5xl mx-auto border-b border-green-200 pb-8 mt-16'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                        <div className='text-center'>
                            <div className='text-2xl font-bold'>
                                <h1 className=' bg-green-700 bg-clip-text text-transparent'>Tudo que você precisa para gerenciar a sua clínica</h1>
                            </div>
                            <p className="text-xl text-gray-600 mt-10 mb-20 max-w-2xl mx-auto">
                                Ferramentas poderosas desenvolvidas especificamente para o setor de saúde
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 ">
                            {cardsContent?.map((card, index) => (
                                <div key={index} className="h-fit m-auto">
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
                </div>
            </section>

        </div>
    );
}
