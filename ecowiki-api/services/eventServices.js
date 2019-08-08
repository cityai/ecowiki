const Event = require('../models/event')
const htmlRemover = require('../util/transform/htmlRemover')
const extError = require('../util/error/extError')
const fetch = require('node-fetch')

class EventServices{
    
    async createEvents(){
        const response = await fetch("https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=13.40&page=100&text=Artificial Intelligence &radius=20 &lat=52.52&key=212b746b232c1e453431465736a56b")
        .then(res=>res.json());

        console.log(response.events.length)
    
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
                location: 'Berlin',
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
}

module.exports = new EventServices();