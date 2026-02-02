import { useState } from "react";
import { Icons } from "../icons/icons";
import { PricingCardsModel } from "../interfaces";
import PricingCard from "./pricingCards";

export default function Carousel({ cards }: PricingCardsModel) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-4">
            <div className="flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="hidden md:block p-3 hover:bg-green-100 rounded-full transition-colors focus:outline-none mr-4"
                >
                    <Icons.arrowLeft className="h-8 w-8 text-green-700" />
                </button>
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg transition-all duration-300 ease-in-out">
                    <PricingCard {...cards[currentIndex]} />
                </div>
                <button
                    onClick={nextSlide}
                    className="hidden md:block p-3 hover:bg-green-100 rounded-full transition-colors focus:outline-none ml-4"
                >
                    <Icons.arrowRight className="h-8 w-8 text-green-700" />
                </button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6">
                <button
                    onClick={prevSlide}
                    className="md:hidden p-2 bg-white border border-gray-200 shadow-sm rounded-full hover:bg-gray-50 transition-colors"
                >
                    <Icons.arrowLeft className="h-6 w-6 text-gray-600" />
                </button>
                <div className="flex gap-2">
                    {cards.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? "bg-green-600 w-8"
                                : "bg-gray-300 w-2.5 hover:bg-gray-400"
                                }`}
                            aria-label={`Ir para plano ${idx + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextSlide}
                    className="md:hidden p-2 bg-white border border-gray-200 shadow-sm rounded-full hover:bg-gray-50 transition-colors"
                >
                    <Icons.arrowRight className="h-6 w-6 text-gray-600" />
                </button>
            </div>
        </div>
    );
}