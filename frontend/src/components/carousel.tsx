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
        <div className="flex items-center justify-center w-full max-w-4xl mx-auto py-8">

            <button
                onClick={prevSlide}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors focus:outline-none z-10"
            >
                <Icons.arrowLeft className="h-10 w-10 text-gray-600" />
            </button>

            <div className="flex-1 px-4 md:px-12 transition-opacity duration-300">
                <PricingCard {...cards[currentIndex]} />

                <div className="flex justify-center mt-6 gap-2">
                    {cards.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "bg-green-600 w-4" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={nextSlide}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors focus:outline-none z-10"
            >
                <Icons.arrowRight className="h-10 w-10 text-gray-600" />
            </button>
        </div>
    );
}