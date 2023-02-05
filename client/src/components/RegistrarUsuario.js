import React, { useState } from 'react'
import {Avatar, Button, Grid, MenuItem, Paper, TextField, Typography} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

 
export default function RegistrarUsuario() {
  const paperStyle= {padding: '30px 20px', width: 300, margin:'20px auto'}
  const headerStyle={margin:0}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const navigate = useNavigate();


  return(
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon/>
          </Avatar>
          <h2 style={headerStyle}>Registro de Usuario</h2>
          <Typography variant='caption'>Por favor rellena este formulario para crear la cuenta</Typography>
        </Grid>
        <form>
          <TextField fullWidth label = 'Nombres' placeholder='Inserta tu nombre/nombres'/>
          <TextField fullWidth label = 'Apellidos' placeholder='Inserta tu apellido/apellidos'/>
          <TextField fullWidth label = 'Correo'/>
          <TextField fullWidth label = 'Contraseña'/>
          <TextField fullWidth label = 'Confirmar contraseña'/>
          <TextField fullWidth label = 'N° de Celular'/>
          <TextField fullWidth label = 'Tipo de Pago' placeholder='Débito o Crédito'/>
          <TextField fullWidth label = 'Código'/>
          <Button type='submit' variant='contained' color='primary' onClick={() => navigate('/usuario/mainUsuario')} >Registrarte</Button>
        </form>
      </Paper>
    </Grid>
  )
}



