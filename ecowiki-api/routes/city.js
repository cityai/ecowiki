const cityController = require('../controllers/cityController')



const express = require('express')

const router = express.Router()

router.post('/:location', cityController.createCity)
router.patch('/:location', cityController.createCity)

//----------------------------------
router.get("/:location",cityController.TOMARKDOWN);

module.exports= router;