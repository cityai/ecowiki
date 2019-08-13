'use strict'

const mongoose = require('mongoose');

var communitySchema = mongoose.Schema({
    groups: {
        type: Array, 
        ref: 'Group'
    }, 
    influencers: {
        type: Array, 
        ref: 'Influencer'
    }, 
    location: {
        type: String, 
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Community', communitySchema)
