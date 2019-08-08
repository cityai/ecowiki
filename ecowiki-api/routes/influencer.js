const influencerController = require('../controllers/influencerController');
const express = require('express');
const router = express.Router();

router.get("/",influencerController.createInfluncer);
router.get("/:city",influencerController.getInfluencers);
router.delete("/delete/:screen_name",influencerController.deleteInfluencer);

module.exports=router;