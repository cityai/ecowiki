const Group = require('../models/group');
const ExtError = require('../util/error/extError');
const fetch = require('node-fetch')
const htmlRemover = require('../util/transform/htmlRemover')
global.Headers = fetch.Headers;
require("dotenv").config();

class GroupServices{

    async createGroups(location){
        //NEW OAUTH AUTH FOR MEETUP API
        const refresh = process.env.MEETUP_REFRESH_TOKEN;
        console.log(refresh);
        const ans = await fetch("https://secure.meetup.com/oauth2/access",{
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams({"client_id":"q31qm95rop67fmmcul0v9ta5id",
            "client_secret":"mhim83of8cmqaq27u37lvl62bc",
            "grant_type":"refresh_token",
            "redirect_uri":"http://localhost:3000/api/meetup/www.wikiai.com",
            "refresh_token" : refresh
        })
        }).then(json=>json.json())
        console.log(ans.access_token);
        const access = ans.access_token;
        const groups = await fetch(`https://api.meetup.com/find/groups?&sign=true&photo-host=public&location=`+location+`&text=Artificial intelligence&category=34&order=members&page=100&desc=true&key=212b746b232c1e453431465736a56b`,
        {
          method:"GET",
          headers:new Headers({'Authorization':'Bearer ' + access}),
        }).then(res=>res.json());
        if(!groups) throw new ExtError(404, "No groups for this city");
        for(let i = 0; i<groups.length; i++){
            const find = await Group.findOne({link: groups[i].link})
            if(find) continue;

            const description = htmlRemover(groups[i].description)

            const group = new Group({
                name: groups[i].name,
                link: groups[i].link,
                description: description,
                location: location,
                members: groups[i].members,
                organizer: groups[i].organizer.name,
                category: groups[i].category.name
            })
           await group.save()
        }
        return groups;
    }

    async getGroups(location){
        const groups = await Group.find({location: location})
        if(!groups) throw new ExtError(404, 'There are no groups for that city.')
        for(let i = 0; i< groups.length; i++){

        }
        return groups;
    }
    async deleteGroup(id){
        const group = await Group.findByIdAndDelete({_id:id});
        if(!group) throw new ExtError(404,'There is no group with given ID');
        return group;
    }
}

module.exports = new GroupServices();