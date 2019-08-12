const cityServices = require('../services/cityServices')
const express = require('express')
const processError= require('../util/error/errorHandler')

const router = express.Router()

class CityController{
    async createCity(req, res){
        try{
            const result = cityServices.createCity(req.body, req.params.city)
            res.send(result)
        }
        catch(error) {
            processError(error, res)
        }
    }
}

module.exports = new CityController();