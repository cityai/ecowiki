const Founder = require("../models/founder");
const ExtError = require("../util/error/extError");


class FounderServices {

    async getFounders(location){
        const founders = Founder.find({location:location})
        if(!founders) throw new ExtError(404,"Founders not found")
        return founders;
    }
}

module.exports = new FounderServices();