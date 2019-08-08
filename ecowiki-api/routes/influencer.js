const influencerController = require('../controllers/influencerController');
const express = require('express');
const router = express.Router();

router.get("/",influencerController.createInfluncer);
router.get("/:city",influencerController.getInfluencers);
router.delete("/:id",influencerController.deleteInfluencer);

module.exports=router;