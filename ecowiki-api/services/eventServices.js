const Event = require('../models/event')
const htmlRemover = require('../util/transform/htmlRemover')
const ExtError = require('../util/error/extError')
const fetch = require('node-fetch')

class EventServices{
    
    async createEvents(location){
        const locationData = await fetch("https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+ location + "&key=212b746b232c1e453431465736a56b").then(res=>res.json());
        const lon = locationData[0].lon;
        const lat =locationData[0].lat
        const response = await fetch("https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon="+ lon +"&page=100&text=Artificial Intelligence &radius=20 &lat="+ lat +"&key=212b746b232c1e453431465736a56b")
        .then(res=>res.json());

    
        for(let i=0; i<response.events.length; i++){

            const find = await Event.findOne({name: response.events[i].name})
            if(find) continue;
            
            let description = '';
            if(response.events[i].description) {
                description = htmlRemover(response.events[i].description)
            }
            
            const event = new Event({
                name: response.events[i].name,
                date: response.events[i].local_date,
                location: location,
                organizer: response.events[i].group.name,
                link: response.events[i].link,
                description: description,
                highlighted: false, 
                tags: null
            })

            event.save()
        }
        return response;
    }

    async getEvents(location){
        const event = await Event.find({location: location})
        if(!event) throw new ExtError(404, "There are no events for given city!")
        return event;
    }

    async deleteEvent(id){
        const event = await Event.findByIdAndDelete({_id: id})
        if(!event) throw new ExtError(404, "Event with the given ID was not found!")
        return event;
    }
}

module.exports = new EventServices();