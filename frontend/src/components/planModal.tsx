import { Box, Button, Modal, Typography, Stack } from "@mui/material";
import { PlanModalProps } from "../interfaces";
import { Icons } from "../icons/icons";
import Btn from "./btn";

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 'none'
};

export default function PlanModal({ open, setIsOpen, onLogin, onRegister }: PlanModalProps) {

    const handleClose = () => setIsOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="auth-modal-title"
            aria-describedby="auth-modal-description"
        >
            <Box sx={modalStyle}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography id="auth-modal-title" variant="h6" component="h2" fontWeight="bold">
                        Já possui uma conta?
                    </Typography>
                    <div onClick={handleClose} className="w-6 h-6 cursor-pointer ">
                        <Icons.x className="hover:text-red-600" />
                    </div>
                </Stack>

                <Typography id="auth-modal-description" sx={{ mb: 4, color: 'text.secondary' }}>
                    Para continuar, escolha uma das opções abaixo.
                </Typography>

                <Stack spacing={2} className="items-center w-full">
                    {/* Botão de Destaque: Criar Conta */}
                    <Btn size="large" text="Criar nova conta" path="/cadastro" variant="contained" btnColor="success" />
                    <Btn size="large" text="Já tenho conta" path="/login" variant="outlined" btnColor="success" />

                </Stack>
            </Box>
        </Modal>
    );
}