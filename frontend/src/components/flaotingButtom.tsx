import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Icons } from '../icons/icons';

export default function FloatingButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Faz a tela "deslizar" em vez de pular instantaneamente
        });
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="success" aria-label="add" className=' hover:shadow-2xl transition-shadow' onClick={scrollToTop}>
                <Icons.arrowUp className='w-10 h-10' />
            </Fab>
        </Box>
    );
}
