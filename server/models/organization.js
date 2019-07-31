'use strict'

const mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
    _id: String, 
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
        required: true
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
        required: true
    },
    founder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Founder',
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    tags: {
        type: Array,
        reqired: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Organization', organizationSchema);