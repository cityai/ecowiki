const startupServices = require("../services/startupServices")
const processError = require("../util/error/errorHandler")

class StartupController{
    async createStartups(req,res){
        try{
            const result = await startupServices.createStartups();
            res.send(result);
        }
        catch(error){
            processError(error,res);
        }
    }
}

module.exports = new StartupController();