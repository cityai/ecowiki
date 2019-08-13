const comunityController= require('../controllers/communityController');
const express = require('express');

const router = express.Router()

router.post('/:location', comunityController.createCommunity)
router.patch('/:location', comunityController.updateCommunity)

module.exports = router;