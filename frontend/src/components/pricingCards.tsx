import { Card, CardContent, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { PricingCardsProps } from "../interfaces";
import { Icons } from "../icons/icons";
import PlanModal from "./planModal";
import { useState } from "react";

export default function PricingCard({ title, description, price, isBasic, resoures }: PricingCardsProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <PlanModal open={isOpen} setIsOpen={setIsOpen} />
            <Card
                className={`w-full mx-auto transition-transform duration-300
                ${!isBasic
                        ? 'border-2 border-green-500 shadow-xl md:scale-105'
                        : 'border-2 border-blue-300 shadow-lg'
                    }`}
                sx={{
                    borderRadius: 4,
                    minHeight: { xs: 'auto', md: 550 },
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    padding: { xs: 2, md: 4 }
                }}
            >
                <CardContent className="flex flex-col h-full p-4 sm:p-6 text-left justify-between">
                    <div>
                        <div className="text-center">
                            <Typography variant="h5" component="div" className="font-bold text-gray-800 sm:text-2xl">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="mb-4 text-sm sm:text-base">
                                {description}
                            </Typography>

                            <div className="my-4">
                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    component="span"
                                    className={`${isBasic ? "font-bold text-blue-700" : "font-bold text-green-700"} text-3xl sm:text-4xl`}
                                >
                                    R$ {price}
                                </Typography>
                                <Typography variant="body1" component="span" color="text.secondary">
                                    /mês
                                </Typography>
                            </div>
                        </div>
                        <List className="flex-grow mt-2">
                            {resoures.map((item, index) => (
                                <ListItem key={index} disableGutters className="py-1">
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <Icons.Check fontSize="small" className="text-green-600" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item}
                                        className="text-gray-700 text-sm sm:text-base"
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <Button
                        variant={"contained"}
                        color={isBasic ? "primary" : "success"}
                        fullWidth
                        onClick={() => setIsOpen(true)}
                        className="mt-6 py-3 rounded-xl text-sm sm:text-base font-semibold shadow-none hover:shadow-md"
                        sx={{ textTransform: 'none' }}
                    >
                        Escolher Plano
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}