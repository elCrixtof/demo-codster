const Usuario  = require('./models/Usuario');
const Alergia  = require('./models/Alergia');

//Uno a muchos, 1 a N
//Usuario va a tener muchos posts o publicaciones
//Se añade una clavbe userID a la tabla alergias
Usuario.hasMany(Alergia, { as: "alergias", foreignKey: "usuario_id" });

//Se añade una clave userId a la tabla usuario
Alergia.belongsTo(Usuario,  { as: "usuario"});
