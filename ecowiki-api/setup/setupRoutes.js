const express = require("express");
const router = express.Router();

const groups = require('../routes/group');
const influencers = require("../routes/influencer");
const events = require('../routes/event');
const startups = require("../routes/startup");



router.use('/groups', groups)
router.use('/events', events)
router.use('/influencers',influencers);
router.use("/startups",startups);

router.get('/', (req, res)=>{
    res.json({
        description: "Root CityAI API endpoint"
    })
})

function setupRoutes(app){
    app.use('/api', router)
}

module.exports = setupRoutes;