const startupServices = require("../services/startupServices")
const processError = require("../util/error/errorHandler")

class StartupController{
    async createStartups(req,res){
        try{
            const result = await startupServices.createStartups(req.params.location);
            res.send(result);
        }
        catch(error){
            processError(error,res);
        }
    }

    async getStartups(req,res){
        try {
            const result = await startupServices.getStartups(req.params.city);
            res.send(result);
        } catch (error) {
            processError(error,res);
        }
    }
    
    async deleteStartup(req,res){
        try {
            const result = await startupServices.deleteStartup(req.params.id);
            res.send(result);
        } catch (error) {
            processError(error,res);
        }
    }
}

module.exports = new StartupController();