const eventController = require('../controllers/eventController');
const express = require('express')

const router = express.Router();

router.get('/:location', eventController.createEvents);

module.exports= router;