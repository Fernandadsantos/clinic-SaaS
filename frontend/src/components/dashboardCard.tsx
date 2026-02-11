import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Icons } from "../icons/icons";
import DashboardCardProps from "../interfaces";

export default function DashboardCard({ content, path, title, icon, color }: DashboardCardProps) {
    const IconComponent = Icons[icon];
    const navigate = useNavigate();

    return (
        <div>
            <Card
                className="hover:shadow-xl transition-shadow cursor-pointer p-5"
                onClick={() => navigate(path)}
            >
                <div className="flex flex-row items-center justify-between pb-2">
                    <Typography className="text-sm font-medium text-gray-600">
                        {title}
                    </Typography>
                    <div className={`h-8 w-8 rounded-full ${color} flex items-center justify-center`}>
                        <IconComponent className='h-4 w-4 text-gray-800' />
                    </div>
                </div>
                <div>
                    <div className="text-2xl font-bold">{content}</div>
                </div>
            </Card>
        </div>
    )
}