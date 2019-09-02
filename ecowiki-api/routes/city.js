const cityController = require('../controllers/cityController')



const express = require('express')

const router = express.Router()

//NOT USED FOR NOW BEACAUSE MARKDOWN CRON IS BEING TESTED
router.get('/:location',cityController.getCity);

router.post('/:location', cityController.createCity)
router.patch('/:location', cityController.createCity)
router.delete(':id',cityController.deleteCity)
//----------------------------------TESTING
//router.get("/:location",cityController.TOMARKDOWN);

module.exports= router;