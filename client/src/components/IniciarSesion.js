import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


//Componente para el inicio de sesión

export default function IniciarSesion() {

<<<<<<< HEAD
=======

>>>>>>> b2c199dfc (backend mejorado y documentado)
  const paperStyle = {padding:20, height:'70vh', width:280, margin:'20px auto'}
  const avatarStyle = {backgroundColor:'#1bbd7e'}
  const navigate = useNavigate();

  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
          <h2>Iniciar Sesión</h2> 
        </Grid>
        <TextField label='Celular' placeholder='Ingresa tu numero de celular' fullWidth/>
        <TextField label='Contraseña' placeholder='Ingresa tu contraseña' fullWidth/>
        <Button variant='contained' type='submit' color='primary' fullWidth sx={{mt: 2}} onClick={() => navigate('/usuario/mainUsuario')} > Iniciar Sesion </Button>
        <Button variant='contained' type='submit' color='primary' fullWidth sx={{mt: 2}} onClick={() => navigate('/')} > Volver </Button>
      </Paper>
    </Grid>
        
  )
}