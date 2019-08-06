'use strict'

const mongoose = require('mongoose');

var startupSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    value: {
        type: Number, 
        required: true
    },
    leadership:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'founder',
        required: true
    },
    investment:{
        type: Number,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    link: {
        type: String, 
        required: true
    },
    highlighted: {
        type: Boolean, 
        required: true
    }, 
    tags:{
        type: Array,
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Startup', startupSchema);