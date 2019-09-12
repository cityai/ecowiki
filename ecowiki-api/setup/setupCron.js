const cron = require('node-cron');

const cityJob = require('../jobs/createCityJob')
const homePageJob = require('../jobs/homePageJob');
const markdownJob = require("../jobs/cityToMarkdown");
const checker = require('../jobs/checkNewCitiesJob');

const cityController = require("../controllers/cityController");

module.exports = function setup(){
    cron.schedule('*/15  * * * *', cityJob)
    cron.schedule("*/28  * * * *",()=>{markdownJob.toMarkdown()});
    cron.schedule("*/30  * * * *",async()=>{homePageJob();})
    cron.schedule("*/39  * * * *",async()=>{checker.check()})
}