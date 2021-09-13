const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {}
Usuario.init({
        nombre: DataTypes.STRING,
        tipo_sangre: DataTypes.STRING,
        no_expediente: DataTypes.INTEGER,
        fecha_ultima_consulta: DataTypes.DATE
    }, {
    sequelize,
    modelName: "usuarios",
    timestamps: false
});

module.exports = Usuario;