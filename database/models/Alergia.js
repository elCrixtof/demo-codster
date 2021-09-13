const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Alergia extends Model {}
Alergia.init({
        nombre_alergia: DataTypes.STRING,
        fecha_alta: DataTypes.DATE,
        medicamento: DataTypes.STRING
    }, {
    sequelize,
    modelName: "alergias",
    timestamps: false
});

module.exports = Alergia;