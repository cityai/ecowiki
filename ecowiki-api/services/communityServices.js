const Community = require('../models/community');
const Group = require('../models/group')
const Influencer = require('../models/influencer')
const ExtError = require('../util/error/extError');

 
class CommunityServices{

    async createCommunity(){    
        const groups = await Group.find();
        const influencers = await Influencer.find();

        const community = new Community({
            groups: groups,
            influencers: influencers
        })
        community.save()

        return community;
    }
    
    async getCommunity(city){
        const community = await Community.find({city: city})
        if(!community) throw new ExtError(404, "Community for the given city was not found!")
        return community;
    }
}

module.exports= new CommunityServices();