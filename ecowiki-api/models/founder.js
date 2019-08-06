'use strict'

const mongoose = require('mongoose');

var founderSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    picture:{
        type: String, 
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    link:{
        type: String, 
        required: true
    },
    title:{
        type: String, 
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Founder', founderSchema);