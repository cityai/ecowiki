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
    address:{
        type:String,
        required:false,
    },
    organizer:{
        type: String,
        required: true
    },
    link: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: false
    },
    highlighted: {
        type: Boolean,
        required: true
    },
    title: {
        type: String, 
        required: false
    }
}, {timestamps: {} });

module.exports = mongoose.model('Event', eventSchema);

