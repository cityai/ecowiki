const comunityController= require('../controllers/communityController');
const express = require('express');

const router = express.Router()

router.post('/:location', comunityController.createCommunity)
router.patch('/:location', comunityController.updateCommunity)
router.delete('/:id', comunityController.deleteCommunity)

module.exports = router;