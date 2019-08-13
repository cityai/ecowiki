const express = require('express');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

function setup(app){
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    app.use(express.json())
    app.use(cookieParser())
}

module.exports=  setup;