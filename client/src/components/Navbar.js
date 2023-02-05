import React from 'react';
import { AppBar, Box, Toolbar, Container, Typography } from "@mui/material";

export default function Navbar() {

  return (
    <Box>
      <AppBar position='static' color='transparent'>
        <Container>
          <Toolbar>
            <Typography variant='h6' color='white'>
              Mande App
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
  
}