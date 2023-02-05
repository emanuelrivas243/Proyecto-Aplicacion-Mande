<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c199dfc (backend mejorado y documentado)
CREATE DATABASE mandeApp;
\c mandeApp;

-- Crea la tabla de usuarios
CREATE TABLE Cliente
<<<<<<< HEAD
=======
=======
CREATE DATABASE mandeapp;
\c mandeapp;

-- Crea la tabla de usuarios
CREATE TABLE usuario
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)
(
    numero_celular VARCHAR(12) PRIMARY KEY,
    nombres VARCHAR(30) ,
    apellidos VARCHAR(30),
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c199dfc (backend mejorado y documentado)
    contraseñaCliente VARCHAR(30),
    direccion VARCHAR(150),
    correo VARCHAR(50),
    medioDePago VARCHAR(50),
    codigoMedioPago VARCHAR(50)
);

--Crea la tabla de trabajdores que estarán asociados con la app
CREATE TABLE Trabajador
<<<<<<< HEAD
=======
=======
    contrasenia_usuario VARCHAR(30),
    direccion VARCHAR(150),
    correo VARCHAR(50),
    medio_de_pago VARCHAR(50),
    codigo_medio_pago VARCHAR(50)
);

--Crea la tabla de trabajdores que estarán asociados con la app
CREATE TABLE trabajador
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)
(
    numero_celular VARCHAR(32) PRIMARY KEY,
    nombres VARCHAR(64),
    apellidos VARCHAR(64),
<<<<<<< HEAD
    contraseñaTrabajador VARCHAR(128),
=======
<<<<<<< HEAD
    contraseñaTrabajador VARCHAR(128),
=======
    contrasenia_trabajador VARCHAR(128),
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)
    direccion VARCHAR(64)
);

--Esta tabla almacena los datos de las tarjetas que están asociadas al medio de pago de algún cliente.
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c199dfc (backend mejorado y documentado)
CREATE TABLE Labor
(
    id_lab SERIAL PRIMARY KEY,
    nombreLabor VARCHAR(50) NOT NULL,
    num_Trabaja VARCHAR(32),
    CONSTRAINT fk_labor_trabajador FOREIGN KEY (num_Trabaja) REFERENCES Trabajador (numero_Celular)
);

--Almacena los datos de un servicio publicado por un trabajador
CREATE TABLE Servicio 
(
    celular VARCHAR(32) PRIMARY KEY,
    nombreServicio VARCHAR(64),
    descPagos VARCHAR(128),
    CONSTRAINT fk_servicio_trabajador FOREIGN KEY (celular) REFERENCES Trabajador (numero_celular)
<<<<<<< HEAD
=======
=======
CREATE TABLE labor
(
    id_lab SERIAL PRIMARY KEY,
    nombre_labor VARCHAR(50) NOT NULL,
    num_trabaja VARCHAR(32),
    CONSTRAINT fk_labor_trabajador FOREIGN KEY (num_trabaja) REFERENCES trabajador (numero_celular)
);

--Almacena los datos de un servicio publicado por un trabajador
CREATE TABLE servicio 
(
    celular VARCHAR(32) PRIMARY KEY,
    nombre_servicio VARCHAR(64),
    desc_pagos VARCHAR(128),
    CONSTRAINT fk_servicio_trabajador FOREIGN KEY (celular) REFERENCES trabajador (numero_celular)
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)
);