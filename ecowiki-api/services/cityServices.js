const City = require('../models/city');
const communityService = require('../services/communityServices');
const eventServices = require('../services/eventServices')
const Founder = require('../models/founder')
const Group = require('../models/group')
const Influencer = require('../models/influencer')
const organizationService = require('../services/organizationServices')
const startupServices = require('../services/startupServices')
const ExtError = require('../util/error/extError')

class CityServices{
    async createCity(data, location){
        const community = await communityService.getCommunity(location)
        const events = await eventServices.getEvents(location)
        const organizations = await organizationService.getOrganizations(location)
        const startups = await startupServices.getStartups(location)
        
        
        const city = new City({
            name: location,
            overview: data.overview,
            //status: status, 
            community: community._id,
            events: events,
            organizations: organizations,
            startups: startups
            // longitude: longitude,
            // latitude: latitude,
            // news: news
        })
        await city.save()
        return city;
    }
    async updateCity(data, location){
        data.community.location = 'polic gej'

        console.log(data.community)

        const city = await City.findOneAndUpdate({name: location},{
            $set: data
        }, {new: true})

        if(!city) throw new ExtError(404, "There are no information about that city!")

        
    }
    async getCity(location){
        const city = await City.find({name: location})
        if(!city) throw new ExtError(404, "There is no data about that city!")
        return city;
    }

    async deleteCity(id){
        const city = await City.findByIdAndDelete({_id: id})
        if(!city) throw new ExtError(404, "There are no information about that city!")
        return city;
    }
}

module.exports= new CityServices();