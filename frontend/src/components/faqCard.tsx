import { FaqCardProps } from "../interfaces";

export default function FaqCard({ question, awnser }: FaqCardProps) {
    return (

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm my-5">
            <div className="max-w-7xl sm:max-w-2xl md:max-w-5xl mx-auto px-4 text-left h-25">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-xl font-bold">{question}</h3>
                    <p className="text-lg text-gray-600">
                        {awnser}
                    </p>
                </div>
            </div>
        </div>

    );
}