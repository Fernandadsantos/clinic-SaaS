import {Icons} from "../icons/icons"
export interface BtnWithLinkProps{
    text: string;
    path: string;
    variant: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
    textColor?: string;
    btnColor: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
};

export type IconNames = keyof typeof Icons;
export interface CardsContentProps{
    title: string;
    description: string;
    resources: string[];
    typeIcon: IconNames;
};


export interface PricingCardsProps{
    title: string;
    description: string;
    price: string;
    path: string;
    isBasic: boolean;
    resoures: string[];
}

export interface PricingCardsModel{
    cards: PricingCardsProps[];
}
export interface HeaderProps{
    btnText1: string;
    btnText2: string;
}

export interface AssuranceSectionProps{
    title: string;
    description: string;
    typeIcon: IconNames;
}

export interface FaqCardProps{
    question: string;
    awnser: string;
}