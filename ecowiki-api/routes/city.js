const cityController = require('../controllers/cityController');
const express = require('express');

const router = express.Router();

//NOT USED FOR NOW BEACAUSE MARKDOWN CRON IS BEING TESTED
router.get('/:location',cityController.getCity);
router.get("/",cityController.getCities)

router.post('/:location', cityController.createCity)
router.patch('/:location', cityController.updateCity)
router.delete('/:id',cityController.deleteCity)
//----------------------------------TESTING
//router.get("/:location",cityController.TOMARKDOWN);

module.exports= router;