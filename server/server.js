const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config/config.js')

//connect to mongo
//console.log(config.dbSettings.uri);
mongoose.connect(config.dbSettings.uri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

server.use(morgan('dev'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

// Add headers
server.use(function (req, res, next) {

    // Website you to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request headers to allow
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, cache-control, pragma, Accept, Authorization');

    if(req.method === "OPTIONS")
    {
        res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    // Pass to next layer of middleware
    next();
});

/** Handling routes */

/** Error Handling */
server.use( (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

server.use( (error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error);
    res.json({
        error: {
            message: 'error'
        }
    });
});

module.exports = server;