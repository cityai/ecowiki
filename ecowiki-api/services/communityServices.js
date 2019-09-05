const Community = require('../models/community');
const Group = require('../models/group');
const Influencer = require('../models/influencer');
const ExtError = require('../util/error/extError');
const _ = require('underscore');

class CommunityServices{
    /**
     * Creates a community for given location.
     * @param location of city, as city name.
     */
    async createCommunity(location){    
        let community = await Community.findOne({location: location});
        
        if(!community){
            const groups = await Group.find({location: location});
            const influencers = await Influencer.find({location: location});
            
            if(!groups) groups =[];
            if(!influencers) influencers = [];
            
            const community = new Community({
                groups: groups,
                influencers: influencers,
                location: location
            });
            await community.save();
        }
        else{
            this.updateCommunity(location);
        }
        return community;
    };

    /**
     * Updates a community for given location.
     * @param location of city, as city name.
     */
    async updateCommunity(location){
        const community = await Community.findOne({location: location});
        if(!community) throw new ExtError (404, 'Community for the given city was not found!');
        
        const groups = await Group.find({location: location});
        const influencers = await Influencer.find({location: location}); 
        
        const diffGroups = _.difference(groups.map(g=>g._id.toString()), community.groups.map(g=> g._id.toString()));  
        
        for(let i = 0; i<diffGroups.length; i++){
            community.groups.push(diffGroups[i]);
        };

        const diffInfluencers = _.difference(influencers.map(i=>i._id.toString()), community.influencers.map(i=>i._id.toString()));
        
        for(let i = 0; i<diffInfluencers.length; i++){
            community.influencers.push(diffInfluencers[i]);
        };

        await community.save();
        return community;
    };
    
    /**
     * Shows community of given location.
     * @param location of city, as city name.
     */
    async getCommunity(location){
        const community = await Community.findOne({location: location});
        if(!community) throw new ExtError(404, 'Community for the given city was not found!');
        return community;
    };

    /**
     * Deletes community for city with the given ID.
     * @param id of community.
     */
    async deleteCommunity(id){
        const community = await Community.findByIdAndDelete({_id: id});
        if(!community) throw new ExtError(404, 'There is no community with given ID!');
        return community;
    };
};

module.exports= new CommunityServices();