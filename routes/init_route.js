const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const Movie = require('../models/movie.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    Movie.find()
            .exec()
            .then(doc => {
                if(doc){
                    res.status(201).json(doc);
                }
            })
            .catch(error => {
                res.status(401).json({ message: "error fecthing data" });
                //console.log("erro");
    });
});


module.exports = router;