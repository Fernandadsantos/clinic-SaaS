import { Card, CardContent, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { PricingCardsProps } from "../interfaces";
import { Icons } from "../icons/icons";

export default function PricingCard({ title, description, price, isBasic, resoures }: PricingCardsProps) {
    return (
        <Card
            className={`w-full max-w-sm mx-auto transition-all duration-300 ${!isBasic ? 'border-2 border-green-500 shadow-xl scale-105' : 'border-2 border-blue-300 shadow-xl scale-105'}`}
            sx={{ borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column', width: 500, padding: 4 }}
        >
            <CardContent className="flex flex-col h-full p-6 text-left">
                <div className="text-center">
                    <Typography variant="h4" component="div" className="font-bold text-gray-800">
                        {title}
                    </Typography>
                    <Typography color="text.secondary" className="mb-4">
                        {description}
                    </Typography>

                    <div className="my-4">
                        <Typography variant="h4" fontWeight={700} component="span" className={`${isBasic ? "font-bold text-blue-700" : "font-bold text-green-700"}`}>
                            R$ {price}
                        </Typography>
                        <Typography variant="body1" component="span" color="text.secondary">
                            /mês
                        </Typography>
                    </div>
                </div>
                <List className="flex-grow">
                    {resoures.map((item, index) => (
                        <ListItem key={index} disableGutters className="py-1">
                            <ListItemIcon sx={{ minWidth: 30 }}>
                                <Icons.check fontSize="small" className="text-green-600" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Button
                    variant={"contained"}
                    color={isBasic ? "primary" : "success"}
                    fullWidth
                    className="mt-4 py-3 rounded-xl"
                >
                    Escolher Plano
                </Button>
            </CardContent>
        </Card>
    );
}