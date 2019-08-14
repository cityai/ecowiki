const eventController = require('../controllers/eventController');
const express = require('express')

const router = express.Router();

router.post('/:location', eventController.createEvents);
router.delete('/:id', eventController.deleteEvent)

module.exports= router;