const cityServices = require('../services/cityServices')
const express = require('express')
const processError= require('../util/error/errorHandler')

//TESTING JOB------------------------
//-----------------------------------
const markdown = require("../jobs/cityToMarkdown");
//-----------------------------------

class CityController{

    async TOMARKDOWN(req,res){
        try {
            const result = await markdown.toMarkdown(req.params.location);
            res.send(result);
        } catch (error) {
            processError(error,res)
        }
    }

    async createCity(req, res){
        try{

            const result = await cityServices.createCity(req.params.location, req.body)
            res.send(result)
        }
        catch(error) {
            processError(error, res)
        }
    }

    async updateCity(req, res){
        try{

            const result = await cityServices.updateCity(req.body, req.params.location)
            res.send(result)
        }
        catch(error) {
            processError(error, res)
        }
    }

    async deleteCity(req, res){
        try{

            const result = await cityServices.deleteCity(req.params.id)
            res.send(result)
        }
        catch(error) {
            processError(error, res)
        }
    }
}

module.exports = new CityController();