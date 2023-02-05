import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Registrarse() {
  
  const navigate = useNavigate();

  return(
    <div>
    <Typography variant='h3' color='primary' align='center' marginTop={10}>
      ¿Deseas registrarte como usuario o cómo trabajador?
    </Typography>

    <Box textAlign='center' justifyContent={'space-between'} marginTop={18}>
      <Button variant="outlined" onClick={() => navigate ("/usuario/registrarUsuario")} >Usuario</Button>
      <Button variant='outlined' onClick={() => navigate ("/trabajador/registrarTrabajador")} >Trabajador</Button>
    </Box>

    </div>
    )
}