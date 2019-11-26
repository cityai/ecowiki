const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

function setup(app){
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors())
    app.use(bodyParser.json())
    app.use(express.json())
    app.use(cookieParser())
    app.all('/', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next()
    });
    app.use((req, res, next) => {
        res.header('access-control-allow-origin', '*');
        next();
      });
}

module.exports=  setup;