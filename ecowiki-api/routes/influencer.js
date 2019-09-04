const influencerController = require('../controllers/influencerController');
const express = require('express');
const router = express.Router();
/**
 * TEST
 * THIS IS THE ROUTE USED TO TEST CRON JOB FOR GETTING DATA FROM EXTERNAL APIs
 *
 **/
router.post("/:location",influencerController.createInfluncer);


router.get("/:location",influencerController.getInfluencers);
router.delete("/:id",influencerController.deleteInfluencer);

module.exports=router;