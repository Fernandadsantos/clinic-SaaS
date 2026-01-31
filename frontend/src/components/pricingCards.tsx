import { Card, CardContent, Typography } from "@mui/material";
import { PricingCardsProps } from "../interfaces";


export default function CardsPricing({ title, description, price, path, isBasic, resoures }: PricingCardsProps) {
    return (
        <Card className='hover:shadow-2xl transition-shadow border-2 border-green-400 bg-green-50' sx={{ minWidth: 275, width: 400, height: isBasic ? 700 : 680, borderRadius: 2, backgroundColor: "#f0fdf4" }}>
            <CardContent className='text-center'>
                <div className='flex-col items-start space-y-5 mt-6'>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 30, fontWeight: 700 }}>
                        {title}
                    </Typography>
                </div>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                    {description}
                </Typography>

                <div className="flex items-center justify-center">
                    {
                        isBasic ?
                            (
                                <Typography className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent" sx={{ fontSize: 50, fontWeight: 600 }}>
                                    R$ {price}
                                </Typography>
                            )
                            :
                            (
                                <Typography className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent" sx={{ fontSize: 50, fontWeight: 600 }}>
                                    R$ {price}
                                </Typography>
                            )
                    }

                    <Typography className="text-gray-600" sx={{ fontSize: 20, fontWeight: 100 }} >
                        /mês
                    </Typography>
                </div>

            </CardContent>
        </Card>
    );
}