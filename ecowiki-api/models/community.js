'use strict'

const mongoose = require('mongoose');

var communitySchema = mongoose.Schema({
    groups: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'Group'
    }, 
    influencers: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'Influencer'
    }, 
    location: {
        type: String, 
        required: true
    }
}, {timestamps: {} });

module.exports = mongoose.model('Community', communitySchema)
