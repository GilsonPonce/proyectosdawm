var express = require('express');
var router = express.Router();

router.post('/total', function(req, res, next) {  

    let collectionarray = req.body
    let keys = Object.keys(collectionarray)

    if (keys.length == 0){
        res.status(400).send("No hay datos");
    }

    let total = 0;

    keys.map(key =>{
        if(collectionarray[key]["status"] == "Shipped"){
            total += (parseFloat(collectionarray[key]["priceEach"]) * parseFloat(collectionarray[key]["quantityOrdered"]))
        }
    })

    res.json({
        total
    })
  
  });

  module.exports = router;