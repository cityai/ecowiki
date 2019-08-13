const comunityController= require('../controllers/communityController');
const express = require('express');

const router = express.Router()

router.get('/', comunityController.createCommunity)

module.exports = router;