const cron = require('node-cron');

const cityJob = require('../jobs/createCityJob')
const homePageJob = require('../jobs/homePageJob');
const markdownJob = require("../jobs/cityToMarkdown");
const checker = require('../jobs/checkNewCitiesJob');

const cityController = require("../controllers/cityController");

module.exports = function setup(){
    cron.schedule('*/10  * * * *', cityJob)
    cron.schedule("*/3  * * * *",()=>{markdownJob.toMarkdown()});
    cron.schedule("*/7  * * * *",async()=>{homePageJob();})
    cron.schedule("*/1  * * * *",async()=>{checker.check()})
}