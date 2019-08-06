'use strict'

const mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    link: {
        type: String, 
        required: true
    }, 
    title: {
        type: String, 
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Event', eventSchema);
