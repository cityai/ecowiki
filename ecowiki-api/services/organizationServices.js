const Organization = require('../models/organization');
const Founder = require('../models/founder')
const extError= require('../util/error/extError')

class OrganizationServices{
    
    async createOrganization(data){
        console.log(data)
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
        organization.save()
        return organization;
    }
}

module.exports= new OrganizationServices()