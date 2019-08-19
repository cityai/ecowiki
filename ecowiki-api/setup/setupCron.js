const cron = require('node-cron');

const cityJob = require('../jobs/createCityJob')

module.exports = function setup(){
    cron.schedule('*/10  * * * *', cityJob)
}