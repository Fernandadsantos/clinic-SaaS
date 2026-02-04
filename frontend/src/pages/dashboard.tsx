import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appointment } from "../interfaces";
import { Skeleton } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { UserRoleBadge } from "../components/badges";
import { DashboardLayout } from "../components/layout/dashboardLayout";



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
            <div className="p-6">
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
            </div>
        </DashboardLayout>
    );
}