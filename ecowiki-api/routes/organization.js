const organizationController = require('../controllers/organizationController');
const express = require('express');
const router = express.Router();

router.post('/', organizationController.createOrganization);

module.exports = router;
