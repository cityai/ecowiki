const Startup = require("../models/startup");
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
                    .then(json=> {                        
                        const startup = new Startup({
                            name: json.data.properties.name,
                            categories: json.data.relationships.categories.items.map(item=>{return item.properties.name}),
                            value:10,
                            investment: json.data.properties.total_funding_usd,
                            description:json.data.properties.description,
                            link:json.data.properties.homepage_url,
                            highlighted: false,
                            tags: []
                        })
                       startup.save();
                        resolve(json)
                    })
                    .catch(error => console.log(error))    
                }
            })
          
        });
    }
}

module.exports = new StartupServices();