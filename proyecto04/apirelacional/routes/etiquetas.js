var express = require('express');
var router = express.Router();


const { Sequelize, Op } = require('sequelize');
const Etiqueta = require('../models').etiqueta;

router.get('/findAll/json', function (req, res, next) {


    Etiqueta.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
        .then(fotos => {
            res.json(fotos);
        })
        .catch(error => res.status(400).send(error))

});

router.get('/findAll/view', function (req, res, next) {


    Etiqueta.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
        .then(fotos => {
            res.render('etiquetas', { title: 'Etiquetas', arrFotos: fotos });
        })
        .catch(error => res.status(400).send(error))

});

router.get('/findByTexto/json', function (req, res, next) {
    let texto = req.query.texto;
    Etiqueta.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {
            [Op.and]: [
                {texto: texto}
            ]
        }
    })
        .then(fotos => {
            res.json(fotos);
        })
        .catch(error => res.status(400).send(error))
});

router.get('/findAllById/:idmin/:idmax/json', function (req, res, next) {
    let idmax = parseInt(req.params.idmax);
    let idmin = parseInt(req.params.idmin);
    Etiqueta.findAll({
        attributes: { exclude: ["updatedAt"] },
        where: {
            id: {
                [Op.between]: [idmin,idmax]
            }
        }
    })
        .then(fotos => {
            res.json(fotos);
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;