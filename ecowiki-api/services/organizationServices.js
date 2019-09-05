const Organization = require('../models/organization');
const ExtError= require('../util/error/extError');
const validation = require('../util/validation');

class OrganizationServices{
    /**
     * Creates an organization for city with the given 
     * location and stores them in database.
     * @param data about organization that we are creating.
     * @param location of city, as city name.
     */
    async createOrganization(data, location){
        const requiredFields = ['category', 'name', 'link', 'location', 'description', 'description', 'profit', 'founder', 'email'];
        validation.fieldsRequired(data, requiredFields);

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
        });
        await organization.save();
        return organization;
    };

    /**
     * Updates an organization with the given id.
     * @param data that we want to update. 
     * @param id of organization that we want to update. 
     */
    async updateOrganization(data, id){
        const organization = await Organization.findOneAndUpdate({_id: id},{
            $set: data
        }, {new:true});
        if(!organization) throw new ExtError(404, 'The organization with the given ID was not found!');
        return organization;
    };

    /**
     * Returns all organizations from the given city.
     * @param location of city, as city name.
     */
    async getOrganizations(location){
        const organizations = await Organization.find({location: location});
        if(!organizations) throw new ExtError(404, 'There are no organizations for the given city!');
        return organizations;
    };

    /**
     * Deletes an organization with the given id.
     * @param id of organization that we want to delete. 
     */
    async deleteOrganization(id){
        const organization = await Organization.findByIdAndDelete({_id: id});
        if(!organization) throw new ExtError(404, 'Organization with the given ID was not found!');
        return organization;
    };
};

module.exports= new OrganizationServices()