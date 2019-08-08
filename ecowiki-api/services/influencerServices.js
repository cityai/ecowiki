const Influencer = require('../models/influencer');
const extError = require('../util/error/extError');
const Twitter = require("twitter");


class InfluencerServices{

    async createInfluencers(){
        const client = Twitter({
            consumer_key:'vqOPZgjYxH95jxYYW5igtqhiY',
            consumer_secret:'ddypYQcurmOH4QG1Myy9q952mmuwKxSt2VbtsUVzIzkapdge3T',
            access_token_key:'712340448514338816-Oq5WYTgY0UuSV0OmMyy0D2MqSNyoFS3',
            access_token_secret:'0GGbZ2LpQoaYiJZ7svac9ksf8cv9C993ckhGflkplZZin',
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
    async deleteInfluencer(screen_name){
        const influencer = await Influencer.deleteOne({link:"https://twitter.com/"+screen_name})
        return influencer;
    }
}

module.exports= new InfluencerServices();