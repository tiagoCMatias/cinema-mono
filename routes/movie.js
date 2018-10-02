const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const Movie = require('../models/movie.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    //res.status(200).json({ message: "Movie Route" });
   Movie.find()
            .exec()
            .then(doc => {
                if(doc){
                    res.status(201).json({doc, message:"Data"});
                }
            })
            .catch(error => {
                res.status(401).json({ message: "error fecthing data" });
                //console.log("erro");
    });
});

router.get('/:id', function(req, res, next) {
    const request_id = req.params.id;
    //res.status(200).json({ message: "Movie Route" });
    Movie.findById(request_id)
            .exec()
            .then(doc => {
                if(doc){
                    res.status(201).json({
                        message: "Movie Found",
                        doc                 
                    });
                }
            })
            .catch(error => {
                res.status(401).json({ message: "error fecthing data" });
                //console.log("erro");
    });
});

/* POST. */
router.post('/', function(req, res, next) {

    const movie = new Movie({
        title: req.body.title,
        runtime: req.body.runtime,
        plot: req.body.plot,
        releaseDate: req.body.releaseDate
    });

    movie
    .save()
    .then(result => {
        res.status(201).json({
            message: "New movie added",
            product: movie
        });
    })
    .catch(error => {
        res.status(201).json({
            message: "Error found",
            error: error
        });
    });

});


module.exports = router;