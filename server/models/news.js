'use strict'

const mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    _id: String, 
    title:{
        type: String, 
        required: true
    }, 
    text: {
        type: String,
        required: true
    }
},{timestamps: {} });

module.exports = mongoose.model("News", newsSchema);