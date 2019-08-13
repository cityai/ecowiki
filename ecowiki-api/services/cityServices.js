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
    async createCity(data, city){
        const community = await communityService.getCommunity(city)
        const events = await eventServices.getEvents(city)
        const organizations = await organizationService.getOrganizations(city)
        const startups = await startupServices.getStartups(city)
        
        
        const city = new City({
            name: data.name,
            overview: data.overview,
            //status: status, 
            community: community,
            events: events,
            organizations: organizations,
            startups: startups
            // lontitude: lontitude,
            // latitude: latitude,
            // news: news
        })
    }

    async getCity(city){
        const city = await City.find({name: city})
        if(!city) throw new ExtError(404, "There is no data about that city!")
        return city;
    }
}

module.exports= new CityServices();