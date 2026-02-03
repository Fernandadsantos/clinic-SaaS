import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Icons } from '../icons/icons';
import { useEffect, useState } from 'react';

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    if (!isVisible) return null;

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="success" aria-label="add" className=' hover:shadow-2xl transition-shadow' onClick={scrollToTop}>
                <Icons.arrowUp className='w-10 h-10' />
            </Fab>
        </Box>
    );
}
