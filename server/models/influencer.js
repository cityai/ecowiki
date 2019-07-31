'use strict'

const mongoose = require('mongoose');

var influencerSchema = mongoose.Schema({
    _id: String, 
    name: {
        type: String, 
        required: true
    },
    picture:{
        type: String, 
        required: true
    },
    location: {
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

module.exports = mongoose.model('Influencer', influencerSchema);