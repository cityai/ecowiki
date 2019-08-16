'use strict'

const mongoose = require('mongoose');

var citySchema = mongoose.Schema({
    name:{
        type: String, 
        required:true
    },
    overview:{
        type: String, 
        required: false
    },
    status:{
        type: String, 
        required: false
    },
    community:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
        required: false
    },
    events: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Event',
        required: false
    },
    organizations: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Organization",
        required: false
    },
    startups:{
        type: [mongoose.Schema.Types.ObjectId], 
        ref: "Startup",
        required: false
    },
    news: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "News"
    }
}, {timestamps: {} });

module.exports = mongoose.model('City', citySchema);