'use strict'

const mongoose = require('mongoose');

var influencerSchema = mongoose.Schema({
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
    },
    tags:{
        type: Array,
        required: true
    },
    followers:{
        type: Number,
        required: false
    }
}, {timestamps: {} });

module.exports = mongoose.model('Influencer', influencerSchema);