import { Button, Card, Input, ListItem, Typography } from "@mui/material";
import { DashboardLayout } from "../components/layout/dashboardLayout";
import { Icons } from "../icons/icons";
import { useState } from "react";
import { Patient } from "../interfaces/index";
import PatientCard from "../components/PatientCard";

export default function Patients() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const patients: Patient[] = [
        {
            id: "01",
            name: "Nome",
            CPF: "000.000.000-00",
            phone: "00000000000",
            email: "Fulano@gmail.com",
            active: true,
        },
        {
            id: "02",
            name: "Nome2",
            CPF: "100.000.000-00",
            phone: "11000000000",
            email: "Fulano1@gmail.com",
            active: true,
        },
        {
            id: "03",
            name: "Nome3",
            CPF: "110.000.000-00",
            phone: "11300000000",
            email: "Fulano3@gmail.com",
            active: true,
        }
    ]
    const handleSearch = () => {

    }

    return (
        <DashboardLayout>
            <div className="p-6 w-full">
                <div className="mb-8">
                    <div className="flex items-center justify-between h-fit gap-3">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Pacientes
                        </h1>
                        <div className="flex-shrink-0 sm:scale-100 scale-90">
                            <Button variant="outlined" color="inherit" size="small" style={{ color: "black", fontWeight: 600 }}>
                                <div className="flex items-center gap-1">
                                    <Icons.Plus className="h-4 w-4 mb-1" />
                                    <Typography variant="caption">
                                        Novo paciente
                                    </Typography>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                <section>
                    <Card className="flex gap-4 items-center p-5" >
                        <div className="flex-1 relative">
                            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Buscar por nome ou CPF"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                className="pl-10"
                                fullWidth
                                style={{ color: "black" }}
                            />
                        </div>
                        <div className="hidden md:flex lg:flex gap-2">
                            <Button onClick={handleSearch} variant="outlined" color="info">
                                Buscar
                            </Button>
                            <Button
                                onClick={() => {
                                    setSearchTerm("");
                                }}
                                variant="outlined"
                                color="error"
                            >
                                Limpar
                            </Button>
                        </div>
                    </Card>
                </section>
                <section className="mt-10 max-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {
                            patients ?
                                patients.map((patient) => (
                                    <PatientCard {...patient} />
                                ))
                                :
                                (
                                    <div className="flex-col text-center items-center justify-center mt-20">
                                        <Typography variant="h6" color="textSecondary">Nenhum paciente cadastrado ainda</Typography>
                                        <div className="mt-2">
                                            <Button variant="contained" size="small" style={{ color: "white", fontWeight: 600 }} color="success">
                                                <Icons.Plus className="h-4 w-4 mr-3 mb-1" />
                                                Novo paciente
                                            </Button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}