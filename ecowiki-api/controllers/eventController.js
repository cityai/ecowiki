const eventServices = require('../services/eventServices');
const express = require('express');
const processError = require('../util/error/errorHandler')


class EventController{
    async createEvents(req, res){
        try{
            const result = await eventServices.createEvents(req.params.location);
            res.send(result)

        }
        catch(error) {
            processError(error, res)
        }
    }
}

module.exports = new EventController();