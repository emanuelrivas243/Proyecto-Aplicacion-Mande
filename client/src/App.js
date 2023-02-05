import { BrowserRouter, Route, Routes } from "react-router-dom";
import IniciarSesion from "./components/IniciarSesion";
import Inicio from "./components/Inicio";
import MainTrabajador from "./components/MainTrabajador";
import MainUsuario from "./components/MainUsuario";
import Registrarse from "./components/Registrarse";
import RegistrarTrabajador from "./components/RegistrarTrabajador";
import RegistrarUsuario from "./components/RegistrarUsuario";
import { Container } from "@mui/material";
import Menu from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Container>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path="/iniciarSesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/usuario/registrarUsuario" element={<RegistrarUsuario/>} />
        <Route path="/trabajador/registrarTrabajador" element={<RegistrarTrabajador/>} />
        <Route path="/usuario/mainUsuario" element={<MainUsuario/>} />
        <Route path="/trabajador/mainTrabajador" element={<MainTrabajador/>} />

    </Routes>
    </Container>
    </BrowserRouter>
  )
}