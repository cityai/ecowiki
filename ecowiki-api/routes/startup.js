const startupController = require("../controllers/startupController");
const express = require("express")

const router = express.Router();


router.post("/:location",startupController.createStartups);
router.get("/:location",startupController.getStartups);

router.delete("/:id",startupController.deleteStartup);
module.exports = router;