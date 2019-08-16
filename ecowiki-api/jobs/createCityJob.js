const City = require('../models/city')
const cityServices = require('../services/cityServices');
const communityServices = require('../services/communityServices')
const eventServices = require('../services/eventServices')
const groupServices = require('../services/groupServices')
const influencerServices = require('../services/influencerServices')
const organizationServices = require('../services/organizationServices')
const startupServices = require('../services/startupServices')

module.exports = async function createCity(){
    const cities = await City.find();

    console.log(cities)
    for(let i = 0; i<cities.length; i++){
        //await startupServices.createStartups(cities[i].name)
        await groupServices.createGroups(cities[i].name)
        await influencerServices.createInfluencers(cities[i].name)
        await communityServices.createCommunity(cities[i].name)
        await eventServices.createEvents(cities[i].name)
        

        const data = {
            community: await communityServices.getCommunity(cities[i].name), 
            events: await eventServices.getEvents(cities[i].name),
            startups:  await startupServices.getStartups(cities[i].name),
            organizations: await organizationServices.getOrganizations(cities[i].name)
        }
        
        console.log('Data collected...')
        
        setTimeout(async function(){
            await cityServices.updateCity(data, cities[i].name)
            
        }, 10000)
        
    }

    console.log("City is updated!")
}