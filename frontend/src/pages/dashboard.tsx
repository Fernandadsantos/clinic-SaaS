import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appointment } from "../interfaces";
import { Card, Skeleton, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { UserRoleBadge } from "../components/badges";
import { DashboardLayout } from "../components/layout/dashboardLayout";
import { Icons } from "../icons/icons";
import DashboardCard from "../components/dashboardCard";



interface Usuario {
    id: string;
    nome: string;
    clinica_id: string;
}

interface Clinica {
    id: string;
    nome: string;
}

export default function Dashboard() {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalPatients: 0,
        appointmentsToday: 0,
        appointmentsMonth: 0,
        upcomingAppointments: [] as Appointment[],
        weekAppointments: [] as Appointment[],
    });
    const { user, isLoading } = useAppSelector((state) => state.auth);


    if (isLoading) {
        return (
            <Skeleton />
        );
    }

    return (
        <DashboardLayout>
            <div className="p-6 w-full">
                <div className="mb-8">
                    {user && (
                        <div className="flex items-center justify-between h-fit">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Bem-vindo, {user.name}!
                            </h1>
                            <div className="md:flex justify-center hidden lg:flex text-center">
                                <UserRoleBadge role={user.role} />
                            </div>
                        </div>
                    )}
                </div>

                <section className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full">
                        <DashboardCard title="Pacientes" icon="Users" path="/dashboard/pacientes" content={'0'} color="bg-green-200" />
                        <DashboardCard title="Atendimentos Hoje" icon="Calendar" path="/dashboard/pacientes/agendamentos" content={'0'} color="bg-red-200" />
                        <DashboardCard title="Atendimentos do Mês" icon="BarChart" path="/dashboard/pacientes/agendamentos" content={'0'} color="bg-blue-200" />
                        <DashboardCard title="Plano atual" icon="Check" path="/dashboard/meu_plano" content={"Básico"} color="bg-purple-200" />
                    </div>

                </section>
            </div>
        </DashboardLayout>
    );
}