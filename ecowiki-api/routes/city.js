const cityController = require('../controllers/cityController')
const express = require('express')

const router = express.Router()

router.post('/', cityController.createCity)

module.exports= router;