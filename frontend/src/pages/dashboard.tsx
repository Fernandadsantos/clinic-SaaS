import { Button, Skeleton, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { UserRoleBadge } from "../components/badges";
import { DashboardLayout } from "../components/layout/dashboardLayout";
import DashboardCard from "../components/dashboardCard";
import { Appointment } from "../interfaces";
import { Link } from "react-router-dom";
import DashboardActionCard from "../components/dashboardActionCard";

export default function Dashboard() {
    const { user, isLoading } = useAppSelector((state) => state.auth);
    const appointments: Appointment[] = [
        {
            id: "02",
            date_appointment: '02/05/2026',
            reason: "doente",
            type: "n sei",
            patient: {
                id: "",
                name: "",
                CPF: "",
                phone: "",
                email: "",
                active: true,
                birth: "16/09/2004"
            },
        }
    ]

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
                        <DashboardCard title="Pacientes" icon="Users" path="/dashboard/pacientes" color="bg-green-200" content={0} />
                        <DashboardCard title="Atendimentos Hoje" icon="Calendar" path="/dashboard/pacientes/agendamentos" color="bg-red-200" content={0} />
                        <DashboardCard title="Atendimentos do Mês" icon="BarChart" path="/dashboard/pacientes/agendamentos" color="bg-blue-200" content={0} />
                    </div>
                </section>
                <section className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 max-w-full">
                        <DashboardActionCard title="Ações rápidas" icon="Plus">
                            <div className="mt-5">
                                <Link to={"atendimentos/novo_atendimento"}>
                                    <Button variant="contained" color="success" fullWidth style={{ marginBottom: 10 }}>
                                        <Typography variant="button" fontWeight={700}>
                                            Novo atendimento
                                        </Typography>
                                    </Button>
                                </Link>
                                <Link to={"pacientes/pesquisa"}>
                                    <Button variant="outlined" color="success" fullWidth >
                                        <Typography variant="button" fontWeight={700}>
                                            Consultar paciente
                                        </Typography>
                                    </Button>
                                </Link>
                            </div>
                        </DashboardActionCard>
                        <DashboardActionCard title="Atendimentos de Hoje" icon="Calendar">
                            <div>
                                {
                                    appointments.length > 1 ?
                                        (
                                            <div></div>
                                        )
                                        :
                                        (
                                            <div className="text-center mt-10">
                                                <Typography variant="body1" color="textSecondary" style={{ marginBottom: 5 }}>
                                                    Nenhum atendimento foi marcado para hoje
                                                </Typography>
                                                <Link to={"agendamentos/novo_agendamento"}>
                                                    <Button variant="text" color="success" size="medium">
                                                        Realizar novo agendamento?
                                                    </Button>
                                                </Link>
                                            </div>
                                        )

                                }
                            </div>
                        </DashboardActionCard>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}