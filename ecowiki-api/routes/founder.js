const founderController = require("../controllers/founderController");
const express = require('express')

const router = express.Router();

router.get("/:city",founderController.getFounders);
//router.delete("/:id",founderController.deleteFounder);
module.exports = router;