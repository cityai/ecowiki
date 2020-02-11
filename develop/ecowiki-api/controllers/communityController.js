const communityServices = require('../services/communityServices');
const processError = require('../util/error/errorHandler')
const express = require('express')

const router = express.Router()

class CommunityController{

    async createCommunity(req, res){
        try{
            const result = await communityServices.createCommunity(req.params.location);
            res.send(result)
        }
        catch(error) {
            processError(error, res);
        }
    }

    async updateCommunity(req, res){
        try{
            const result = await communityServices.updateCommunity(req.params.location)
            res.send(result)
        }
        catch(error){
            processError(error, res);
        }
    }

    async deleteCommunity(req, res){
        try{

            const result = await communityServices.deleteCommunity(req.params.id)
            res.send(result)
        }
        catch(error) {
            processError(error, res)
        }
    }
}

module.exports = new CommunityController();