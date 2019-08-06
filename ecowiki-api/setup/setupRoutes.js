const express = require("express");
const router = express.Router();

const groups = require('../routes/group');

router.use('/groups', groups)

router.get('/', (req, res)=>{
    res.json({
        description: "Root CityAI API endpoint"
    })
})

function setupRoutes(app){
    app.use('/api', router)
}

module.exports = setupRoutes;