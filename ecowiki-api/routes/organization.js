const organizationController = require('../controllers/organizationController');
const express = require('express');

const router = express.Router();

router.get('/',organizationController.getAllOrganizations)
router.get('/:location',organizationController.getOrganizations);
router.post('/:location', organizationController.createOrganization);
router.post('/',organizationController.addOrganization)
router.patch('/:id', organizationController.updateOrganization);
router.delete('/:id',organizationController.deleteOrganization);

module.exports = router;
