const express = require('express');
const router = express.Router();
const Alergia = require('../database/models/Alergia');

//Index
router.get('/', (req, res) => {
    Alergia.findAll().then(alergias => {
        res.json(alergias);
    });
});

//Create
router.post('/', (req, res) => {
    Post.create({
        nombre_alergia: req.body.nombre_alergia,
        fecha_alta: req.body.fecha_alta,
        medicamento: req.body.medicamento
    }).then(post => {
        res.json(post)
    });
});


//Read
router.get('/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
        res.json(post);
    });
});


module.exports = router;