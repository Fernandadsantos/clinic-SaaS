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
        <Card className='hover:shadow-lg transition-shadow  border-b border-green-400' sx={{ minWidth: 275, width: 300, height: 300 }}>
            <CardContent className='text-left'>
                <div className='flex-col items-start space-y-5'>
                    <Typography className='bg-green-500 h-12 w-12 rounded-3xl flex justify-center items-center'>
                        <SelectedIcon width={34} height={34} color="primary" />
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 24, fontWeight: 700 }}>
                        {title}
                    </Typography>
                </div>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                    {description}
                </Typography>
                <div className='mt-5'>
                    {
                        resources.map((text) => {
                            return (
                                <Typography className='flex gap-1'>
                                    <Icons.check />
                                    {text}
                                </Typography>
                            )
                        })
                    }
                </div>
            </CardContent>
        </Card>
    );
}