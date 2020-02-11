const Startup = require('../models/startup');
const Founder = require('../models/founder');
const ExtError = require('../util/error/extError');
const fetch = require('node-fetch');

class StartupServices {

    async wait(index) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('WAIT PLEASE');
            }, index * 2000);
        });
    };
    /**
     * Pulls startups from Crunchbase and
     * saves them in database.
     * @param location of city, as city name.
     */
    async createStartups(location) {
        const urlCompanies = 'https://api.crunchbase.com/v3.1/organizations' +
            '?categories=Artificial%20Intelligence&locations=' + location + '&organization_types=company' +
            '&user_key=' + process.env.CRUNCHBASE_KEY;
        const urlSpecific = 'https://api.crunchbase.com/v3.1/organizations/';
        const promises = [];
        await fetch(urlCompanies).then(res => res.json()).then( async startups => {

            for (let i = 0; i < startups.data.items.length; i++) {
                const newStartup = await fetch(urlSpecific + startups.data.items[i].properties.permalink + '?user_key=' + process.env.CRUNCHBASE_KEY)
                .then(res => res.json()).catch(e=>console.log(e));
                promises.push(newStartup);
            }
            Promise.all(promises).then(async function(results) {
                for (let i = 0; i < results.length; i++) {
                    let leader;
                    if (results[i].data.relationships.current_team.items[0]) {
                        leader = new Founder({
                            name: results[i].data.relationships.current_team.items[0].relationships.person.properties.first_name + ' ' + results[i].data.relationships.current_team.items[0].relationships.person.properties.last_name,
                            picture: results[i].data.relationships.current_team.items[0].relationships.person.properties.profile_image_url,
                            link: 'https://www.crunchbase.com/' + results[i].data.relationships.current_team.items[0].relationships.person.properties.web_path,
                            title: results[i].data.relationships.current_team.items[0].properties.title,
                            location: results[i].data.relationships.headquarters.item.properties.city,
                        });
                    };
                    if (leader === undefined) leader = {};
                    else {
                        const find = await Founder.findOne({ link: leader.link });
                        if (!find)
                            await leader.save();
                    };
                    const find = await Startup.findOne({ name: results[i].data.properties.name });
                    if (!find) {
                        let tempPic;
                        if(results[i].data.properties.profile_image_url)
                            tempPic = results[i].data.properties.profile_image_url;
                        else
                            tempPic = "/images/startupEmpty.svg.png";
                        if (results[i].data.relationships.funding_rounds.items[0]) {
                            let series = ['A', 'B', 'C', 'D', 'E'];
                            if (series.includes(results[i].data.relationships.funding_rounds.items[0].series) ||
                                results[i].data.relationships.funding_rounds.items[0].properties.funding_type === 'seed' ||
                                results[i].data.relationships.funding_rounds.items[0].properties.funding_type === 'pre-seed') {

                                const startup = new Startup({
                                    name: results[i].data.properties.name,
                                    categories: results[i].data.relationships.categories.items.map(item => { return item.properties.name }),
                                    investors: results[i].data.relationships.investors.items.map(item=>{return item.properties.name}),
                                    value: 10,
                                    picture:tempPic,
                                    type: 'Startup',
                                    investment: results[i].data.properties.total_funding_usd,
                                    description: results[i].data.properties.description,
                                    link: "https://www.crunchbase.com/" + results[i].data.properties.web_path,
                                    highlighted: false,
                                    location: location,
                                    tags: [],
                                    leadership: leader.id
                                });
                               await startup.save();
                            }
                            else {
                                const startup = new Startup({
                                    name: results[i].data.properties.name,
                                    categories: results[i].data.relationships.categories.items.map(item => { return item.properties.name }),
                                    value: 10,
                                    type: 'Corporation',
                                    picture:tempPic,
                                    investment: results[i].data.properties.total_funding_usd,
                                    description: results[i].data.properties.description,
                                    link: "https://www.crunchbase.com/" + results[i].data.properties.web_path,
                                    highlighted: false,
                                    leadership: leader.id,
                                    location: location,
                                    tags: []
                                });
                              await  startup.save();
                            };
                        }
                        else {
                            const startup = new Startup({
                                name: results[i].data.properties.name,
                                categories: results[i].data.relationships.categories.items.map(item => { return item.properties.name }),
                                value: 10,
                                type: 'Startup',
                                picture:tempPic,
                                investment: results[i].data.properties.total_funding_usd,
                                description: results[i].data.properties.description,
                                link: "https://www.crunchbase.com/" + results[i].data.properties.web_path,
                                highlighted: false,
                                leadership: leader.id,
                                location: location,//results[i].data.relationships.headquarters.item.properties.city,
                                tags: []
                            });
                        await  startup.save();
                        };
                    };
                };
            }).catch(e=>console.log(e));
        }).catch(e=>console.log(e));
        return 'done';
    };

    async addStartup(body){
        const find = await Startup.findOne({name:body.name});
        if(!find){
            let cat = body.categories.split(",").map(e=>e.trim());
            const startup = new Startup({
                name: body.name,
                categories: cat,
                value: body.value,
                type: body.type,
                picture:body.picture,
                investment: body.investment,
                description: body.description,
                link: body.link,
                highlighted: body.highlighted,
                investors: body.investors,
                location: body.location,
                tags: []
            });
            await  startup.save();
            return console.log("Startup added succesfully");
        }
        return console.log("Startup already exists");
    }

    async updateStartup(data, id){
        const startup = await Startup.findOneAndUpdate({_id: id},{
            $set: data
        }, {new:true});
        if(!startup) throw new ExtError(404, 'The statup with the given ID was not found!');
        return startup;
    };

    /**
     * Returns all Startups for given location.
     * @param location of city, as city name.
     */
    async getStartups(location) {
        const startups = await Startup.find({ location: location });
        if (!startups) throw new ExtError(404, 'There are no startups for the given city!');
        return startups;
    };

    async getAllStartups() {
        const startups = await Startup.find({});
        if (!startups) throw new ExtError(404, 'There are no startups in the database!');
        return startups;
    };

    async deleteStartup(id) {
        const startup = await Startup.findByIdAndDelete({ _id: id });
        if(!startup) throw new ExtError(404,'There is no startup with given ID!');
        return startup;
    };
};

module.exports = new StartupServices();