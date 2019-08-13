const organizationController = require('../controllers/organizationController');
const express = require('express');
const router = express.Router();

router.post('/:location', organizationController.createOrganization);
router.patch('/:id', organizationController.updateOrganization)

module.exports = router;
