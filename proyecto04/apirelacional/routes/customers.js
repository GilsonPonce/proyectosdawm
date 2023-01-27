var express = require('express');
var router = express.Router();


const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;

router.get('/', function (req, res, next) {
    Customers.findAll({
        attributes: { exclude: ["updatedAt","createdAt","id"] }
    })
        .then(customers => {
            res.json(customers);
        })
        .catch(error => res.status(400).send(error))

});


module.exports = router;