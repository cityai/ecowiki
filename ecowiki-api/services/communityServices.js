const Community = require('../models/community');
const Group = require('../models/group')
const Influencer = require('../models/influencer')
const ExtError = require('../util/error/extError');
const _ = require('lodash')

    Array.prototype.diff = function(a){
        return this.filter(function(i){
            return a.indexOf(i)<0
        })
    }

    function comparer(otherArray){
        return function(current){
          return otherArray.filter(function(other){
            return other._id == current._id 
          }).length == 0;
        }
      }

class CommunityServices{

    async createCommunity(location){    
        let community = await Community.findOne({location: location})
        
        if(!community){
            const groups = await Group.find({location: location});
            const influencers = await Influencer.find({location: location});
            
            if(!groups) groups =[];
            if(!influencers) influencers = [];

            const community = new Community({
                groups: groups,
                influencers: influencers,
                location: location
            })
            await community.save()
        }
        else{
            this.updateCommunity(location)
        }
        return community;
    }

    async updateCommunity(location){
        const community = await Community.findOne({location: location})
        if(!community) throw new ExtError (404, "Community for the given city was not found!")
        
        const groups = await Group.find({location: location});
        const influencers = await Influencer.find({location: location});

        var uniqueResultOne = groups.filter(function(obj) {
            return !community.groups.some(function(obj2) {
                return obj.name == obj2.name;
            });
        });

        var uniqueResultTwo = community.groups.filter(function(obj) {
            return !groups.some(function(obj2) {
                return obj.name == obj2.name;
            });
        });

        const diffGroups = uniqueResultOne.concat(uniqueResultTwo)  

        for(let i = 0; i<diffGroups.length; i++){
            community.groups.push(diffGroups[i])
        }



        var uniqueResultONE = influencers.filter(function(obj) {
            return !community.influencers.some(function(obj2) {
                return obj.name == obj2.name;
            });
        });

        var uniqueResultTWO = community.influencers.filter(function(obj) {
            return !influencers.some(function(obj2) {
                return obj.name == obj2.name;
            });
        });

        const diffInfluencers = uniqueResultONE.concat(uniqueResultTWO)  

        for(let i = 0; i<diffInfluencers.length; i++){
            community.groups.push(diffInfluencers[i])
        }

        await community.save()
        return community;
    }
    
    async getCommunity(location){
        const community = await Community.findOne({location: location})
        if(!community) throw new ExtError(404, "Community for the given city was not found!")
        return community;
    }

    async deleteCommunity(id){
        const community = await Community.findByIdAndDelete({_id: id})
        if(!community) throw new ExtError(404, "Community by the given ID was not found!")
        return community;
    }
    
}

module.exports= new CommunityServices();