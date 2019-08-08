const influencerService = require("../services/influencerServices");
const processError = require("../util/error/errorHandler");
const express = require("express");

class InfluencerController {
    async createInfluncer(req,res){
        try{
            const result = await influencerService.createInfluencers();
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    };

    async getInfluencers(req,res){
        try{
            const result = await influencerService.getInfluencers(req.params.city);
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    };

    async deleteInfluencer(req,res){
        try{
            const result = await influencerService.deleteInfluencer(req.params.screen_name);
            res.send(result);
        }
        catch(error)
        {
            processError(error,res);
        }
    }
}

module.exports= new InfluencerController();