const founderServices = require("../services/founderServices");
const processError = require("../util/error/errorHandler");

class FounderController {
    async getFounders(req,res)
    {
        try {
            const result = await founderServices.getFounders(req.params.city);
            res.send(result);
        } catch (error) {
            processError(error,res);
        }
    }
}

module.exports = new FounderController();