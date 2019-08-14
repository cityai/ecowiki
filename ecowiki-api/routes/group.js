const groupController = require('../controllers/groupController');
const express = require('express');
const router = express.Router();

/**
 * TEST
 */
router.get('/:location', groupController.createGroup)

//-----------------------------------------------
router.get('/:location', groupController.getGroups);
module.exports = router