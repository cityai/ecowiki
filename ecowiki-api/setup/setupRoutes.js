const express = require("express");
const router = express.Router();

const groups = require('../routes/group');
const influencers = require("../routes/influencer");
const events = require('../routes/event');
const community = require('../routes/community');
const organization = require('../routes/organization');
const startups = require("../routes/startup");
const city = require('../routes/city')

router.use('/groups', groups)
router.use('/events', events)
router.use('/influencers',influencers);
router.use('/community', community);
router.use('/organizations', organization);
router.use("/startups",startups);
router.use('/cities', city);

router.get('/', (req, res)=>{
    res.json({
        description: "Root CityAI API endpoint"
    })
})

function setupRoutes(app){
    app.use('/api', router)
}

module.exports = setupRoutes;