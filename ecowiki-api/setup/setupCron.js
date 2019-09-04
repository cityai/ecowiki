const cron = require('node-cron');

const cityJob = require('../jobs/createCityJob')
const markdownJob = require("../jobs/cityToMarkdown");

const cityController = require("../controllers/cityController");

module.exports = function setup(){
    //cron.schedule('*/10  * * * *', cityJob)
    //cron.schedule("*/1  * * * *",()=>{markdownJob.toMarkdown();console.log("done")});
}