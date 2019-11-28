const groupController = require('../controllers/groupController');
const express = require('express');

const router = express.Router();

/**
 * TEST
 * THIS IS THE ROUTE USED TO TEST CRON JOB FOR GETTING DATA FROM EXTERNAL APIs
 */
router.get('/',groupController.getAllGroups);
router.get('/:location', groupController.getGroups);
router.post('/:location/', groupController.createGroup);
router.post('/',groupController.addGroup)
router.delete('/:id',groupController.deleteGroup);

module.exports = router;