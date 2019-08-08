const Influencer = require('../models/influencer');
const extError = require('../util/error/extError');
const Twitter = require("twitter");
const process = require("process");
require("dotenv").config();

class InfluencerServices{
    
    async createInfluencers(){
        const consumer_key = process.env.CONSUMER_KEY;
        const consumer_secret = process.env.CONSUMER_SECRET;
        const access_token_key = process.env.ACCESS_TOKEN_KEY;
        const access_token_secret = process.env.ACCESS_TOKEN_SECRET;
        
        const client = Twitter({
            consumer_key,
            consumer_secret,
            access_token_key,
            access_token_secret
        });

        //LIST BERLIN-AI-INFLUENCERS
        const params = {list_id:'860430898814218241'}; 
        
        const res = await client.get("lists/members",params)
        for(let i=0;i<res.users.length;i++)
        {
             const find = await Influencer.findOne({link:"https://twitter.com/"
                                                     +res.users[i].screen_name});
             if(find) continue;

            const influencer = new Influencer({
                name:res.users[i].name,
                picture:res.users[i].profile_image_url,
                location:"Berlin",
                link:"https://twitter.com/" + res.users[i].screen_name,
                title:"a",
                tags:[],
            })
            influencer.save();
        }
        
        return res.users;
    }
    
    async getInfluencers(city){
        const influencers = await Influencer.find({location:city});
        if(!influencers) extError(404,"There are no influencersr for this city");
        for(let i=0;i<influencers.length;i++)
        {
            //Influencers to MARKDOWN
        }
        return influencers;
    }
    async deleteInfluencer(id){
        const influencer = await Influencer.findByIdAndDelete({_id: id})
        return influencer;
    }
}

module.exports= new InfluencerServices();