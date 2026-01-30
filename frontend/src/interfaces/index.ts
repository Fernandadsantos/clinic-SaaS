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