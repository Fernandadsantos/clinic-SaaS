import { ReactNode } from "react";
import {Icons} from "../icons/icons"
import { NavigateProps } from "react-router-dom";
export interface BtnWithLinkProps{
    text: string;
    path: string;
    variant: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
    textColor?: string;
    btnColor: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
};

export type IconNames = keyof typeof Icons ;
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
    path1: string;
    path2: string;
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

export interface PlanModalProps{
    open: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onLogin?: () => void;
    onRegister?: () => void;
}

export interface FormDataRegister {
    email?: string;
    password?: string;
    confirmPassword?: string;
    clinicName?: string;
    cnpj?: string;
    userName?: string;
    selectedPlan?: string;
}

export interface Patient {
    id: string;
    name: string;
    CPF?: string;
    phone?: string;
    email?: string;
}

export interface Appointment {
    id: string;
    date_appointment: string;
    reason?: string;
    type: string;
    patient: Patient;
}

export type UserRole = 'ROLE_MASTER' | 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_ALL';
export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    tenantId?: string;
}
export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
export interface UserRoleBadgeProps {
    role: UserRole | string;
}
export interface DashboardLayoutProps {
    children: ReactNode;
}
export interface NavSideBarProps {
    title: string;
    href: string;
    icon: IconNames | null;
    separator?: boolean;
    role: UserRole;
}

export interface DashboardCardProps{
    content?: number;
    path: string;
    title?: string;
    icon?: IconNames ;
    color: string;
}

export interface DashboardActionCardProps{
    title?: string;
    icon?: IconNames;
    children?: ReactNode;
}

