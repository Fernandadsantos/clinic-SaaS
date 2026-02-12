import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Patient } from "../interfaces/index";
import { useNavigate } from "react-router-dom";
import { calcAge } from "../utils/utils";
import { Icons } from "../icons/icons";

export default function PatientCard(patient: Patient) {
    const navigate = useNavigate();

    const age = calcAge(patient.birth ? patient.birth : "");

    const handleEdit = (patient: Patient) => {

    }

    const handleDisable = (patient: Patient) => {

    }

    return (
        <Card
            key={patient.id}
            className="hover:shadow-lg transition-all cursor-pointer group px-6 py-4"
        >
            <div
                onClick={() =>
                    navigate(`/dashboard/patients/${patient.id}`)
                }
                className="cursor-pointer"
            >
                <div className="pb-3">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                <span className="text-green-700 font-semibold text-lg">
                                    {patient.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div>
                                <Typography variant="body1" className="text-lg group-hover:text-green-700 transition-colors">
                                    {patient.name}
                                </Typography>
                                {age && (
                                    <p className="text-sm text-gray-500">
                                        {age} anos
                                    </p>
                                )}
                            </div>
                        </div>
                        {!patient.active && (
                            <Typography variant="inherit">Inativo</Typography>
                        )}
                    </div>
                </div>

                <CardContent className="pb-4">
                    <div className="space-y-2">
                        {patient.phone && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Icons.Phone className="h-4 w-4 text-gray-400" />
                                <span>{patient.phone}</span>
                            </div>
                        )}
                        {patient.email && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Icons.Mail className="h-4 w-4 text-gray-400" />
                                <span className="truncate">{patient.email}</span>
                            </div>
                        )}
                        {patient.CPF && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Icons.FileText className="h-4 w-4 text-gray-400" />
                                <span>{patient.CPF}</span>
                            </div>
                        )}
                    </div>
                </CardContent>
            </div>

            <CardContent className="pt-0 border-t">
                <div className="flex gap-2 w-full">
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(patient);
                        }}
                        variant="outlined"
                        size="small"
                        className="flex-1"
                    >
                        <Icons.Edit className="h-4 w-4 mr-1" />
                        Editar
                    </Button>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDisable(patient);
                        }}
                        variant="outlined"
                        size="small"
                        color="error"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                        <Icons.Trash className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}