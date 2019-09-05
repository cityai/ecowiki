const cron = require('node-cron');

const cityJob = require('../jobs/createCityJob')
const markdownJob = require("../jobs/cityToMarkdown");

const cityController = require("../controllers/cityController");

module.exports = function setup(){
<<<<<<< HEAD
    //cron.schedule('*/30  * * * *', cityJob)
    cron.schedule("*/1  * * * *",()=>{markdownJob.toMarkdown();console.log("done")});
=======
    //cron.schedule('*/10  * * * *', cityJob)
    //cron.schedule("*/1  * * * *",()=>{markdownJob.toMarkdown();console.log("done")});
>>>>>>> 27ab340aff61c4e18637443a8789cb665c805c76
}