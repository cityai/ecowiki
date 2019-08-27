const groupController = require('../controllers/groupController');
const express = require('express');
const router = express.Router();

/**
 * TEST
 */
router.post('/:location/', groupController.createGroup)



//-----------------------------------------------
router.get('/:location', groupController.getGroups);
module.exports = router