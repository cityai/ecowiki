const influencerController = require('../controllers/influencerController');
const express = require('express');
const router = express.Router();
/**
 * TEST
 * THIS IS THE ROUTE USED TO TEST CRON JOB FOR GETTING DATA FROM EXTERNAL APIs
 *
 **/
router.get('/',influencerController.getAllInfluencers);
router.get('/:location',influencerController.getInfluencers);
router.post('/',influencerController.addInfluencer);
router.post('/:location',influencerController.createInfluncer);
router.delete('/:id',influencerController.deleteInfluencer);

module.exports=router;