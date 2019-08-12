const startupController = require("../controllers/startupController");
const express = require("express")

const router = express.Router();

router.get("/",startupController.createStartups);
//router.get("/",startupController.getStartups);
//router.delete("/:id",startupController.deleteStartup);
module.exports = router;