'use strict'

const mongoose = require('mongoose');

var startupSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    type:{
        type: String,
        required:true
    },
    categories: {
        type: Array, 
        required: true
    },
    value: {
        type: Number, 
        required: true
    },
    leadership:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'founder',
        required: false
    },
    investment:{
        type: Number,
        required: true
    },
    description: {
        type: String, 
        required: false
    },
    link: {
        type: String, 
        required: false
    },
    location:{
        type: String,
        required: true
    }, 
    highlighted: {
        type: Boolean, 
        required: true
    },
    location:{
        type: String,
        required:true
    },
    tags:{
        type: Array,
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Startup', startupSchema);