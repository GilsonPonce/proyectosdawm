var express = require('express');
var router = express.Router();

router.post('/total', function(req, res, next) {  

    let array = []

    array = req.body

    if (array.length == 0){
        res.status(400).send("No hay datos");
    }

    let total = 0;

    array.map(orden =>{
        total += (orden["priceEach"] * orden["quantityOrdered"])
    })

    res.json({
        total
    })
  
  });

  module.exports = router;