const Founder = require('../models/founder');
const ExtError = require('../util/error/extError');

class FounderServices {
    /**
     * Returns founders for the given location.
     * @param location of city, as city name.
     */
    async getFounders(location){
        const founders = Founder.find({location:location});
        if(!founders) throw new ExtError(404,'Founders for the given location were not found.');
        return founders;
    };

    /**
     * Deletes a founder by the given id.
     * @param id of founder that we want to delete.
     */
    async deleteFounder(id){
        const founder = Founder.findByIdAndDelete({_id:id});
        if(!founder) throw new ExtError(404,'Founder with given ID was not found.');
        return founder;
    };
};

module.exports = new FounderServices();