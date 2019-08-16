const Organization = require('../models/organization');
const Founder = require('../models/founder')
const ExtError= require('../util/error/extError')

class OrganizationServices{
    
    async createOrganization(data, location){
        const organization = new Organization({
            category: data.category,
            name: data.name, 
            link: data.link,
            location: location,
            description: data.description,
            profit: data.profit, 
            founder: data.founder,
            email: data.email,
            tags: data.tags
        })
        await organization.save()
        return organization;
    }

    async updateOrganization(data, id){
        const organization = await Organization.findOneAndUpdate({_id: id},{
            $set: data
        }, {new:true})
        if(!organization) throw new ExtError(404, "The organization with the given ID was not found!")
        return organization;
    }
    async getOrganizations(location){
        const organizations = await Organization.find({location: location})
        if(!organizations) throw new ExtError(404, "There are no organizations for the given city!")
        return organizations;
    }
}

module.exports= new OrganizationServices()