const Influencer = require('../models/influencer');
const ExtError = require('../util/error/extError');
const Twitter = require('twitter');
const process = require('process');
require('dotenv').config();

class InfluencerServices{
    
    /**
     * Pulls information about Influencers for the given
     * location and saves them to database.
     * @param location of city, as city name.
     */
    async createInfluencers(location){

        const client = await Twitter({
            consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: process.env.CONSUMER_SECRET,
            access_token_key: process.env.ACCESS_TOKEN_KEY,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET
        });
        
        //Formats the name of city so that it does not have uppercase letters and spacings
        const listName = location.toLowerCase().replace(/ /g,'-') + '-ai-infl';
        const params = {owner_screen_name: 'thecityai', slug: listName}; 
        
        await client.get('lists/members',params,async (err,res,response)=>
        {
            if(err)console.log(err);
            else {
                for(let i=0;i<res.users.length;i++)
            {
                const find = await Influencer.findOne({link:'https://twitter.com/'+res.users[i].screen_name});
                if(find) continue;

                const influencer = new Influencer({
                    name:res.users[i].name,
                    picture:res.users[i].profile_image_url,
                    location:location,
                    link:'https://twitter.com/' + res.users[i].screen_name,
                    title:'a',
                    tags:[],
                    followers: res.users[i].followers_count
                });
                await  influencer.save();
            };
            }});
            return 'Done'
    };
    
    async addInfluencer(body){
        const find = await Influencer.findOne({link:body.link});
        if(!find){
            const influencer = new Influencer({
                name:body.name,
                picture:body.picture,
                location:body.location,
                link:body.link,
                title:'a',
                tags:[],
                followers: body.followers
            });
            await  influencer.save();
            return console.log("Influencer succesfully added");
        }
        return console.log("Influencer already exists");
    }

    /**
     * Returns all Influencers from the given city.
     * @param location of city, as city name. 
     */
    async getInfluencers(location){
        const influencers = await Influencer.find({location:location});
        if(!influencers) throw new extError(404,'There are no influencers for this city');
        return influencers;
    };

    async getAllInfluencers(){
        const influencers = await Influencer.find({});
        if(!influencers) throw new extError(404,'There are no influencers in the database');
        return influencers;
    }

    /**
     * Deletes an influencer with the given id.
     * @param id of influencer that we want to delete.  
     */
    async deleteInfluencer(id){
        const influencer = await Influencer.findByIdAndDelete({_id: id});
        if(!influencer) throw new ExtError(404,'There is no influencer with given ID');
        return influencer;
    };
};

module.exports= new InfluencerServices();