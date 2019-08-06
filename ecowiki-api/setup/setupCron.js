const cron = require('node-cron');

const groupJob = require('../jobs/group/groupJob');

module.exports = function setup(){
    // Group CRON every 23 hours.
    cron.schedule('* 23 * * *', groupJob);
}