import React from 'react';
import Header from '../components/header';
import Btn from '../components/btn';
import { Icons } from '../icons/icons';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-100 via-white to-green-100">
            <Header />
            <section className='relative overflow-hidden py-20 sm:py-32 '>
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

            </section>

        </div>
    );
}
