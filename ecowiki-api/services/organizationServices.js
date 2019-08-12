const Organization = require('../models/organization');
const Founder = require('../models/founder')
const ExtError= require('../util/error/extError')

class OrganizationServices{
    
    async createOrganization(data){
        const organization = new Organization({
            category: data.category,
            name: data.name, 
            link: data.link,
            location: data.location,
            description: data.description,
            profit: data.profit, 
            founder: data.founder,
            email: data.email,
            tags: data.tags
        })
        await organization.save()
        return organization;
    }

    async getOrganizations(location){
        const organizations = await Organization.find({location: location})
        if(!organizations) throw new ExtError(404, "There are no organizations for the given city!")
        return organizations;
    }
}

module.exports= new OrganizationServices()