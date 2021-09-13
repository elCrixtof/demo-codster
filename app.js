const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/associations');

//Setting
const PORT = process.env.PORT || 3000;

//Middleware Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutas
app.get('/', function (req, res) {
  res.json("Hola, mundo")
});

app.use('/demo/v1/accounts', require('./routes/usuarios'));
app.use('/demo/v1/alergias', require('./routes/alergias'));

//Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`La app ha arrancado en http://localhost:${PORT}`);

  //Conectarse a la base de datos
  //Force true: DROP TABLES
//   sequelize.sync({force: false}).then(() => {
  sequelize.authenticate().then(() => {
    console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
    console.log("Se ha producido un error", error);
  });
});