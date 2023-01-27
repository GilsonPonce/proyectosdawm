var express = require('express');
var router = express.Router();


const { Sequelize, Op } = require('sequelize');
const Offices = require('../models').offices;

router.get('/findAll/json', function (req, res, next) {


    Offices.findAll()
        .then(offices => {
            res.json(offices);
        })
        .catch(error => res.status(400).send(error))

});


module.exports = router;