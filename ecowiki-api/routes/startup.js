const startupController = require("../controllers/startupController");
const express = require("express")

const router = express.Router();

/**
 * TEST
 * THIS IS THE ROUTE USED TO TEST CRON JOB FOR GETTING DATA FROM EXTERNAL APIs
 */
//router.post("/:location",startupController.createStartups);
router.get('/',startupController.getAllStartups);
router.get('/:location',startupController.getStartups);
router.post('/',startupController.addStartup);
router.delete('/:id',startupController.deleteStartup);

module.exports = router;