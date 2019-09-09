const mainPagesController = require('../controllers/mainPagesController');
const express = require('express');

const router = express.Router();

router.get('/startups',mainPagesController.getAllStartups);
router.get('/communities',mainPagesController.getAllCommunities);
router.get('/events',mainPagesController.getAllEvents);
router.get('/organizations',mainPagesController.getAllOrganizations);

module.exports = router;