const Event = require('../models/event');
const htmlRemover = require('../util/transform/htmlRemover');
const ExtError = require('../util/error/extError');
const fetch = require('node-fetch');

require('dotenv').config();
global.Headers = fetch.Headers;

class EventServices {

    /**
     * Pulls events from MEETUP, and save them in our database.
     * @param location of city, as city name.
     */
    async createEvents(location) {
        const refresh = process.env.MEETUP_REFRESH_TOKEN;
        const ans = await fetch('https://secure.meetup.com/oauth2/access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'client_id': 'q31qm95rop67fmmcul0v9ta5id',
                'client_secret': 'mhim83of8cmqaq27u37lvl62bc',
                'grant_type': 'refresh_token',
                'redirect_uri': 'http://localhost:3000/api/meetup/www.wikiai.com',
                'refresh_token': refresh
            })
        })
            .then(json => json.json()).catch(e=>console.log(e));

        const access = ans.access_token;

        const locationData = await fetch('https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=' + location + '&key=212b746b232c1e453431465736a56b',
            {
                method: 'GET',
                headers: new Headers({ 'Authorization': 'Bearer ' + access }),
            })
            .then(res => res.json()).catch(e => console.log(e));
        let lon;
        let lat;
        if (locationData !== undefined) {
            lon = locationData[0].lon;
            lat = locationData[0].lat
        }
        const response = await fetch('https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=' + lon + '&page=100&text=Artificial Intelligence &radius=20 &lat=' + lat + '&key=212b746b232c1e453431465736a56b',
            {
                method: 'GET',
                headers: new Headers({ 'Authorization': 'Bearer ' + access }),
            }).then(res => res.json()).catch(e => console.log(e));
        if (response) {
            for (let i = 0; i < response.events.length; i++) {

                const find = await Event.findOne({ name: response.events[i].name })
                if (find) continue;

                let description = '';
                if (response.events[i].description) {
                    description = htmlRemover(response.events[i].description)
                };
                let address = 'No address provided';
                if (response.events[i].venue && response.events[i].venue.address_1) {
                    address = response.events[i].venue.address_1;
                };
                const event = new Event({
                    name: response.events[i].name,
                    date: response.events[i].local_date,
                    location: location,
                    address: address,
                    organizer: response.events[i].group.name,
                    link: response.events[i].link,
                    description: description,
                    highlighted: false,
                    tags: null
                });
                await event.save();
            };
        }
        return response;
    };

    async addEvent(body){
        const find = await Event.findOne({name:body.name});
        if(!find)
        {
            let address = "No address provided!";
            if(body.address !== "")
                address = body.address;

            const event = new Event({
                name: body.name,
                date: body.date,
                location: body.location,
                address: address,
                organizer: body.organizer,
                link: body.link,
                description: body.description,
                highlighted: body.highlighted,
                tags: []
            });
            await event.save();
            return console.log("Event added succesfully");
        }
        return console.log("Event already exists");
    }

    /**
     * Returns events for the given location.
     * @param location of city, as city name.
     */
    async getEvents(location) {
        const event = await Event.find({ location: location });
        if (!event) throw new ExtError(404, 'There are no events for given city!');
        return event;
    };

    async getAllEvents(){
        const events = await Event.find({});
        if(!events) throw new ExtError(404,'There are no events in the database');
        return events;
    }

    /**
     * Deletes an event from database by the given id.
     * @param id of event that we want to delete.
     */
    async deleteEvent(id) {
        const event = await Event.findByIdAndDelete({ _id: id });
        if (!event) throw new ExtError(404, 'Event with the given ID was not found!');
        return event;
    };
};

module.exports = new EventServices();