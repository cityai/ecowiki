const eventController = require('../controllers/eventController');
const express = require('express');

const router = express.Router();

router.get('/',eventController.getAllEvents);
router.get('/:location',eventController.getEvents);
router.post('/:location', eventController.createEvents);
router.post('/', eventController.addEvent);
router.patch('/:id',eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports= router;