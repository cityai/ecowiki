const communityServices = require('../services/communityServices');
const processError = require('../util/error/errorHandler')
const express = require('express')

const router = express.Router()

class CommunityController{

    async createCommunity(req, res){
        try{
            const result = await communityServices.createCommunity();
            res.send(result)
        }
        catch(error) {
            processError(error, res);
        }
    }
}

module.exports = new CommunityController();