/*--------------- Funciones para Usuario ---------------------*/

const pool = require('../db');

//Crea un usuario con el metodo post

const creaUsuario = async (req, res) => {

  const { numero_celular, nombres, apellidos, contrasenia_usuario, direccion, correo, medio_de_pago, codigo_medio_pago } = req.body

  try {

    const result = await pool.query('INSERT INTO usuario (numero_celular, nombres, apellidos, contrasenia_usuario, direccion, correo, medio_de_pago, codigo_medio_pago) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [
      numero_celular,
      nombres,
      apellidos,
      contrasenia_usuario,
      direccion,
      correo,
      medio_de_pago,
      codigo_medio_pago
    ]);
  
    console.log(result);
    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
  }
}

//Lista los usuarios que están registrados

const listaUsuarios = (req, res) => {
  res.send('Users')
}

//Lista sólo un usuario con GET

const listaUnUsuario = (req, res) => {
  res.send('Un solo usuario :)')
}


module.exports = {
  listaUsuarios,
  creaUsuario,
  listaUnUsuario
}