const Group = require('../models/group');
const ExtError = require('../util/error/extError');
const fetch = require('node-fetch')
const htmlRemover = require('../util/transform/htmlRemover')

class GroupServices{

    async createGroups(){
        const groups = await fetch("https://api.meetup.com/find/groups?&sign=true&photo-host=public&location=Berlin&text=Artificial intelligence&category=34&order=members&page=200&desc=true&key=212b746b232c1e453431465736a56b")
        .then(res=>res.json());

        for(let i = 0; i<groups.length; i++){
            const find = await Group.findOne({link: groups[i].name})
            if(find) continue;

            const description = htmlRemover(groups[i].description)

            const group = new Group({
                name: groups[i].name,
                link: groups[i].link,
                description: description,
                city: groups[i].city,
                members: groups[i].members,
                organizer: groups[i].organizer.name,
                category: groups[i].category.name
            })
            group.save()
        }
        return groups;
    }

    async getGroups(city){
        const groups = await Group.find({city: city})
        if(!groups) throw new ExtError(404, 'There are no groups for that city.')
        for(let i = 0; i< groups.length; i++){

        }
        return groups;
    }
}

module.exports = new GroupServices();