const mainPagesService = require('../services/mainPagesServices');
const processError = require('../util/error/errorHandler');

class MainPagesController{
    async getAllStartups(req,res){
        try {
            const result = await mainPagesService.startupsToMarkdown();
            res.send(result);
        } catch (error) {
            processError(error,res)
        }
    }
    async getAllCommunities(req,res){
        try {
            const result = await mainPagesService.communitiesToMarkdown();
            res.send(result);
        } catch (error) {
            processError(error,res);
        }
    }
    async getAllEvents(req,res){
        try {
            const result = await mainPagesService.eventsToMarkdown();
            res.send(result);
        } catch (error) {
            processError(error,res);
        }
    }
    async getAllOrganizations(req,res){
        try {
            const result = await mainPagesService.organizationsToMarkdown();
            res.send(result);
        } catch (error) {
            processError(error,res)
        }
    }
}

module.exports = new MainPagesController();