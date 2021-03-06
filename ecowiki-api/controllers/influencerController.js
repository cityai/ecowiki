const influencerService = require("../services/influencerServices");
const processError = require("../util/error/errorHandler");
const express = require("express");

class InfluencerController {
    async createInfluncer(req,res){
        try{
            const result = await influencerService.createInfluencers(req.params.location);
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    };

    async addInfluencer(req,res){
        try {
            const result = await influencerService.addInfluencer(req.body);
            res.send(result);
        } catch (error) {
            processError(error,res);
        }
    }

    async getInfluencers(req,res){
        try{
            const result = await influencerService.getInfluencers(req.params.location);
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    };

    async getAllInfluencers(req,res){
        try{
            const result = await influencerService.getAllInfluencers();
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    };

    async updateInfluencer(req,res){
        try{
            const result = await influencerService.updateInfluencer(req.body,req.params.id);
            res.send(result)
        }
        catch(error){
            processError(error, res)
        }
    };

    async deleteInfluencer(req,res){
        try{
            const result = await influencerService.deleteInfluencer(req.params.id);
            res.send(result);
        }
        catch(error)
        {
            processError(error,res);
        }
    }
}

module.exports= new InfluencerController();