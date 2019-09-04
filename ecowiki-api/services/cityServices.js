const City = require('../models/city');
const validation = require('../util/validation');
const ExtError = require('../util/error/extError');

class CityServices{
    /**
     * Creates a new city.
     * @param location of city, as city name.
     * @param data about city that we are creating.
     */
    async createCity(location, data){
        if(!location) throw new ExtError(400, 'City was not given.');
        if(!data) throw new ExtError(400, 'You need to provide data for city.');

        const requiredFields = ['overview', 'longitude', 'latitude'];
        validation.fieldsRequired(data, requiredFields);

        const city = new City({
            name: location,
            overview: data.overview,
            // status: status,
            longitude: longitude,
            latitude: latitude
            // news: news
        });

        await city.save();
        return city;
    };

    /**
     * Updates a city.
     * @param data  that we want to update.
     * @param location of city, as city name. 
     */
    async updateCity(data, location){
        const city = await City.findOneAndUpdate({name: location},{
            $set: data
        }, {new: true});
        if(!city) throw new ExtError(404, 'There are no information about that city!');
    };

    /**
     * Finds a city by the given location.
     * @param location of city, as city name.
     */
    async getCity(location){
        const city = await City.find({name: location});
        if(!city) throw new ExtError(404, 'There is no data about that city!');
        return city;
    };

    /**
     * Deletes a city by the given id.
     * @param id of city. 
     */
    async deleteCity(id){
        const city = await City.findByIdAndDelete({_id: id});
        if(!city) throw new ExtError(404, 'There are no information about that city!');
        return city;
    };
};

module.exports= new CityServices();