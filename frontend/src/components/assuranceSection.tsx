import { AssuranceSectionProps } from "../interfaces";
import { Icons } from "../icons/icons";

export default function AssuranceSection({ title, description, typeIcon }: AssuranceSectionProps) {
    const SelectedIcon = Icons[typeIcon];
    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <SelectedIcon />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
            </div>
        </div>

    );
}