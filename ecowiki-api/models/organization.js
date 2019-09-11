'use strict'

const mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
    category: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profit:{
        type: Boolean,
        required: false
    },
    founder: {
        type: String,
        required: false
    },
    email: {
        type: String, 
        required: false
    },
    tags: {
        type: Array,
        reqired: false
    }
}, {timestamps: {} });

module.exports = mongoose.model('Organization', organizationSchema);