'use strict'

const mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    link: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    members: {
        type: Number, 
        required: true
    },
    organizer: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Group', groupSchema);