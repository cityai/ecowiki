'use strict'

const mongoose = require('mongoose');

var startupSchema = mongoose.Schema({
    _id: String,
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
    }
}, {timestamps: {} });

module.exports = mongoose.model('Startup', startupSchema);