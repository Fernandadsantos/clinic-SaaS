import { Card, Typography } from "@mui/material";
import { Icons } from "../icons/icons";
import { DashboardActionCardProps } from "../interfaces/index";

export default function DashboardActionCard({ title, icon, children }: DashboardActionCardProps) {
    const IconComponent = Icons[icon ? icon : "Home"];

    return (
        <div>
            <Card
                className="hover:shadow-xl transition-shadow cursor-pointer p-5"
            >
                <div>
                    <div className="flex gap-2">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center`}>
                            <IconComponent />
                        </div>
                        <Typography variant="h6" fontWeight={700}>
                            {title}
                        </Typography>
                    </div>
                </div>
                {
                    children
                }
            </Card>
        </div>
    )
}