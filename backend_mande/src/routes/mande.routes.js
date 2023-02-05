<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c199dfc (backend mejorado y documentado)
//Aquí se definen las urls

const { Router, application } = require('express');

const router = Router(); //reasigna el componente Router en una constante/variable, Router permite crear nuevas urls

router.get('/inicio', (req, res) => {
  res.send('Bienvenido a Mande!');
});

router.get('/inicio', (req, res) => {
  res.send('Bienvenido a Mande!');
});

router.get('/inicio', (req, res) => {
  res.send('Bienvenido a Mande!');
});

router.get('/inicio', (req, res) => {
  res.send('Bienvenido a Mande!');
});

router.get('/inicio', (req, res) => {
  res.send('Bienvenido a Mande!');
});
<<<<<<< HEAD
=======
=======
const { Router, application } = require('express');
const router = Router(); //reasigna el componente Router en una constante/variable, Router permite crear nuevas urls
const { listaUsuarios, creaUsuario, listaUnUsuario } = require('../controllers/mande.controller');
const pool = require('../db');

/*------------ Rutas de: Cliente ------------*/

//Lista los usuarios registrados en la base de datos
router.get('/usuarios', listaUsuarios)

//Crea los usuarios para la aplicación
router.post('/usuarios', creaUsuario);

//Lista sólo un usuario a través de su número de celular
router.get('/usuarios/num', listaUnUsuario);


/*------------ Rutas de: Trabajador ------------*/

>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)

module.exports = router;