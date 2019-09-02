const comunityController= require('../controllers/communityController');
const express = require('express');

const router = express.Router()
/**
 * TEST
 * THIS IS THE ROUTE USED TO TEST CRON JOB FOR GETTING DATA FROM EXTERNAL APIs
 */
//router.post('/:location', comunityController.createCommunity)


router.patch('/:location', comunityController.updateCommunity)
router.delete('/:id', comunityController.deleteCommunity)

module.exports = router;