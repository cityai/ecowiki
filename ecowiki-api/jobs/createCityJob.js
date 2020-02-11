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

    console.log(cities.length)
    
    console.log(999999999)
    for(let i = 0; i<cities.length; i++){
        console.log(1)
        await influencerServices.createInfluencers(cities[i].name)
        await startupServices.createStartups(cities[i].name);
        console.log(2)
        //await groupServices.createGroups(cities[i].name)
        
        
        await communityServices.createCommunity(cities[i].name)
        await eventServices.createEvents(cities[i].name)
        console.log(3)

        // const data = {
        //     community: await communityServices.getCommunity(cities[i].name),
        //     events: await eventServices.getEvents(cities[i].name),
        //     // startups:  await startupServices.getStartups(cities[i].name),
        //     organizations: await organizationServices.getOrganizations(cities[i].name)
        // }
        const community = await communityServices.getCommunity(cities[i].name);
        const startups=  await startupServices.getStartups(cities[i].name);
        const events = await eventServices.getEvents(cities[i].name)
        const organizations = await organizationServices.getOrganizations(cities[i].name)
        console.log(4)
        const data = {
            community,
            events,
            organizations,
            startups
        }
        console.log('Data collected...')
        
        // await setTimeout(async function(){
            await cityServices.updateCity(data, cities[i].name)
            
        // }, 10000)
        
    }

    console.log("City is updated!")
}