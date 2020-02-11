'use strict'

const mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true
    }, 
    section: {
        type: String,
        required: true
    }, 
    source: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    tags:{
        type: Array, 
        required: true
    }
},{timestamps: {} });

module.exports = mongoose.model("News", newsSchema);