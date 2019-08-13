const groupServices = require('../services/groupServices');
const processError = require('../util/error/errorHandler');
const express = require('express');
const router = express.Router();

class GroupController{
    async createGroup(req, res){
        try{
            const result = await groupServices.createGroups();
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    }

    async getGroups(req, res){
        try{
            const result = await groupServices.getGroups(req.params.location)
            res.send(result)
        }
        catch(error) {
            processError(error, res)
        };
    };
}

module.exports = new GroupController();