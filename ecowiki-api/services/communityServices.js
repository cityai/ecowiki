const Community = require('../models/community');
const Group = require('../models/group')
const Influencer = require('../models/influencer')
const extError = require('../util/error/extError');

 
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
}

module.exports= new CommunityServices();