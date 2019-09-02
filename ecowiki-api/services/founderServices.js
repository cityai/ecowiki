const Founder = require("../models/founder");
const ExtError = require("../util/error/extError");


class FounderServices {

    async getFounders(location){
        const founders = Founder.find({location:location})
        if(!founders) throw new ExtError(404,"Founders not found")
        return founders;
    }
    async deleteFounder(id){
        const founder = Founder.findByIdAndDelete({_id:id});
        if(!founder) throw new ExtError(404,"Founder with given ID not found");
        return founder;
    }
}

module.exports = new FounderServices();