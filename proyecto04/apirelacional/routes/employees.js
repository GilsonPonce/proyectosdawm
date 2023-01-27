var express = require('express');
var router = express.Router();


const { Sequelize, Op } = require('sequelize');
const Employees = require('../models').employees;

router.get('/findAll/json', function (req, res, next) {


    Employees.findAll()
        .then(employees => {
            res.json(employees);
        })
        .catch(error => res.status(400).send(error))

});


module.exports = router;