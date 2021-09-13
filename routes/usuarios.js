const express = require('express');
const router = express.Router();
const Usuario = require('../database/models/Usuario');
const Alergia = require('../database/models/Alergia');
const sequelize = require('../database/db');

//Create /api/users
router.post('/', (req, res) => {
    Usuario.create({
        nombre: req.body.nombre,
        tipo_sangre: req.body.tipo_sangre,
        no_expediente: req.body.no_expediente,
        fecha_ultima_consulta: req.body.fecha_ultima_consulta
    }).then(user => {
        // res.json({
        //     codigo: 200,
        //     mensaje: "Peticion completada",
        //     user
        // });
        res.json(user);
    }).catch(err =>  {
        res.json(err);
    });
});

//Index
router.get('/', (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.json(usuarios);
    });
});

//Read http://localhost:3000/demo/v1/accounts/2/record
// router.get('/:id/record', (req, res) => {
//     Usuario.findOne({
//         where: {
//             id: req.params.id,
//         },
//         include: {
//             model: Alergia,
//             // as: "fk_alergia_usuario",
//             as: "alergias",
//             attributes: ['nombre_alergia', 'fecha_alta', 'medicamento']
//         },
//     }).then(usuario => {
//         res.json({
//             codigo: 200,
//             mensaje: "Peticion completada",
//             usuario
//         });
//     }).catch(err =>  {
//         res.json({
//             codigo: 400,
//             mensaje: "El id de usuario no existe",
//             err
//         });
//     });
// });

router.get('/:id/record', async (req, res) => {
    try {
        const  usuario = await Usuario.findOne({
            where: {
                id: req.params.id,
            },
            include: {
                model: Alergia,
                // as: "fk_alergia_usuario",
                as: "alergias",
                attributes: ['nombre_alergia', [sequelize.fn('date_format', sequelize.col('fecha_alta'), '%d-%m-%Y'), 'fecha_alta_formateada'], 'medicamento']
            },
            attributes:  ['nombre', 'tipo_sangre', 'no_expediente', [sequelize.fn('date_format', sequelize.col('fecha_ultima_consulta'), '%d-%m-%Y'), 'fecha_ultima_consulta_formateada']]
        });
        if(usuario){
            return res.json(usuario);
        }else {
            return res.status(404).json({
                codigo: 404,
                mensaje: "El id de usuario no existe"
            });
        }
    } catch (error) {
        return res.status(400).json({
            codigo: 400,
            error
        });
    }
});

module.exports = router;