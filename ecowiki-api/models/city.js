'use strict'

const mongoose = require('mongoose');

var citySchema = mongoose.Schema({
    name:{
        type: String, 
        required:true
    },
    overview:{
        type: String, 
        required: true
    },
    status:{
        type: String, 
        required: false
    },
    community:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
        required: true
    },
    events: {
        type: Array,
        ref: 'Event',
        required: true
    },
    organizations: {
        type: Array,
        ref: "Organization",
        required: true
    },
    startups:{
        type: Array, 
        ref: "Startup",
        required: true
    },
    news: {
        type: Array,
        ref: "News"
    }
}, {timestamps: {} });

module.exports = mongoose.model('City', citySchema);