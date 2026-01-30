import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardsContentProps } from "../interfaces";
import { Icons } from '../icons/icons';


export default function BasicCard({ title, description, resources, typeIcon }: CardsContentProps) {
    const SelectedIcon = Icons[typeIcon];

    return (
        <Card className='hover:shadow-2xl transition-shadow  border-b border-green-400' sx={{ minWidth: 275, width: 400, height: 400 }}>
            <CardContent className='text-left'>
                <div className='flex-col items-start space-y-5'>
                    <Typography className='h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white mb-4'>
                        <SelectedIcon width={34} height={34} color="primary" />
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 24, fontWeight: 700 }}>
                        {title}
                    </Typography>
                </div>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                    {description}
                </Typography>
                <div className='mt-5 '>
                    {
                        resources.map((text) => {
                            return (
                                <div className='flex gap-1 space-y-4 items-center'>
                                    <Icons.check className="h-8 w-8 mr-2" />
                                    <Typography sx={{ fontSize: 20 }} className=''>
                                        {text}
                                    </Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </CardContent>
        </Card>
    );
}