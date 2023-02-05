import React from 'react';
import { Button, Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {

<<<<<<< HEAD
  const navigate = useNavigate();
=======
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const navigate = useNavigate(); //Permite navegar dentro de la aplicación
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)

  return(
    <div>
    <Typography variant='h3' color='primary' align='center' marginTop={3}>
      ¡Bienvenido a Mande!
    </Typography>
    <img src="/images/menuImagen.png" width='390' height='475'  />
      
    <div >
      <Button variant="outlined" onClick={() => navigate ("/iniciarSesion")} >Iniciar Sesion</Button>
      <Button variant='outlined' onClick={() => navigate ("/registrarse")} >Registrate </Button>
    </div>
    
    <div>
    </div>

    </div> 
  )
}