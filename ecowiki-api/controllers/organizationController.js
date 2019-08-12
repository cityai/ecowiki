const organizationService = require('../services/organizationServices');
const express = require('express')
const processError = require('../util/error/errorHandler')

class OrganizationController{
    async createOrganization(req, res){
        try{
            const result = await organizationService.createOrganization(req.body);
            res.send(result)
        }
        catch(error){
            processError(error, res)
        };
    }
}

module.exports = new OrganizationController()