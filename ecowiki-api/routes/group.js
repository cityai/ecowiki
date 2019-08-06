const groupController = require('../controllers/groupController');
const express = require('express');
const router = express.Router();

/**
 * TEST
 */
router.get('/', groupController.createGroup)

//-----------------------------------------------
router.get('/:city', groupController.getGroups);
module.exports = router