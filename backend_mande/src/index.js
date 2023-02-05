//Archivo que arranca el servidor
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b2c199dfc (backend mejorado y documentado)

const express = require('express');
const morgan = require('morgan');

const mandeRoutes = require ('./routes/mande.routes')

const app = express(); //ejecuta express
<<<<<<< HEAD
=======
=======
const express = require('express');
const morgan = require('morgan');
const app = express(); //ejecuta express
const mandeRoutes = require ('./routes/mande.routes')

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)

app.use(morgan('dev'));
app.use(mandeRoutes);

app.listen(4000);
<<<<<<< HEAD
console.log('Server on port 4000');
=======
<<<<<<< HEAD
console.log('Server on port 4000');
=======
console.log('Server on port 4000');
>>>>>>> 9684202a8 (backend mejorado y documentado)
>>>>>>> b2c199dfc (backend mejorado y documentado)
