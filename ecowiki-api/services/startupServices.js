const Startup = require("../models/startup");
const Founder = require("../models/founder");
const ExtError = require("../util/error/extError")
const fetch = require("node-fetch")

class StartupServices{
    // RESOLVE ONLY RETURN FIRST PROMISE!!! WORKS AS ASYNC W/O AWAIT
    async createStartups(){
        return new Promise((resolve, reject) => {
            const urlCompanies = 'https://api.crunchbase.com/v3.1/organizations'+
            '?categories=Artificial%20Intelligence&locations=Berlin&organization_types=company'+
            '&user_key=' + process.env.CRUNCHBASE_KEY;
            const urlSpecific = 'https://api.crunchbase.com/v3.1/organizations/';
            
            fetch(urlCompanies).then(res=>res.json()).then(startups=>{
                for(let i = 0;i<startups.data.items.length;i++)
                {
                    fetch(urlSpecific+startups.data.items[i].properties.permalink +'?user_key=' + process.env.CRUNCHBASE_KEY )
                    .then(res=>res.json())
                    .then(async function(json){
                        let leader
                        if(json.data.relationships.current_team.items[0])
                        {
                            leader = new Founder({
                                name:json.data.relationships.current_team.items[0].relationships.person.properties.first_name + " " + json.data.relationships.current_team.items[0].relationships.person.properties.last_name,
                                picture:json.data.relationships.current_team.items[0].relationships.person.properties.profile_image_url,
                                link:"www.crunchbase.com/" + json.data.relationships.current_team.items[0].relationships.person.properties.web_path,
                                title:json.data.relationships.current_team.items[0].properties.title,
                                location:json.data.relationships.headquarters.item.properties.city,
                            })
                        }
                        if(leader === undefined) leader = {};
                        else {
                            const find = await Founder.findOne({link:leader.link});
                            if(!find)
                                leader.save();
                        }
                        const find = await Startup.findOne({name:json.data.properties.name})
                        if(!find){
                            if(json.data.relationships.funding_rounds.items[0])
                            {
                                let series = ["A","B","C","D","E"]
                                if(series.includes(json.data.relationships.funding_rounds.items[0].series) || 
                                    json.data.relationships.funding_rounds.items[0].properties.funding_type === "seed" ||
                                    json.data.relationships.funding_rounds.items[0].properties.funding_type === "pre-seed"){

                                    const startup = new Startup({
                                        name: json.data.properties.name,
                                        categories: json.data.relationships.categories.items.map(item=>{return item.properties.name}),
                                        value:10,
                                        type: "Startup",
                                        investment: json.data.properties.total_funding_usd,
                                        description:json.data.properties.description,
                                        link:json.data.properties.homepage_url,
                                        highlighted: false,
                                        location:json.data.relationships.headquarters.item.properties.city,
                                        tags: [],
                                        leadership:leader.id
                                    })
                                    startup.save();
                                }
                                else {
                                    const startup = new Startup({
                                        name: json.data.properties.name,
                                        categories: json.data.relationships.categories.items.map(item=>{return item.properties.name}),
                                        value:10,
                                        type: "Corporation",
                                        investment: json.data.properties.total_funding_usd,
                                        description:json.data.properties.description,
                                        link:json.data.properties.homepage_url,
                                        highlighted: false,
                                        leadership:leader.id,
                                        location:json.data.relationships.headquarters.item.properties.city,
                                        tags: []
                                    })
                                    startup.save();
                                }
                            }
                            else{
                                const startup = new Startup({
                                    name: json.data.properties.name,
                                    categories: json.data.relationships.categories.items.map(item=>{return item.properties.name}),
                                    value:10,
                                    type:"Startup",
                                    investment: json.data.properties.total_funding_usd,
                                    description:json.data.properties.description,
                                    link:json.data.properties.homepage_url,
                                    highlighted: false,
                                    leadership:leader.id,
                                    location:json.data.relationships.headquarters.item.properties.city,
                                    tags: []
                                })
                                startup.save();
                            }
                    }
                        resolve(json)
                    })
                    .catch(error => console.log(error))    
                }
            })
          
        });
    }

    async getStartups(location){
        const startups = await Startup.find({location: location})
        if(!startups) throw new ExtError(404, "There are no startups for the given city!")
        return startups;
    }

    async deleteStartup(id){
        const startup = await Startup.findByIdAndDelete({_id:id});
        return startup;
    }
}

module.exports = new StartupServices();