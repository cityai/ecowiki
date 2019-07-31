'use strict'

const mongoose = require('mongoose');

var communitySchema = mongoose.Schema({
    _id: String,
    groups: {
        type: Array, 
        ref: 'Group'
    }, 
    influencers: {
        type: Array, 
        ref: 'Influencer'
    }
}, {timestamps: {} });

module.exports = mongoose.model('Community', communitySchema)
